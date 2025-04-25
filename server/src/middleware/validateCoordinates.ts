import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

// Zod schema for coordinate validation
const coordinateSchema = z.tuple([
  z.number().min(-180).max(180), // longitude
  z.number().min(-90).max(90)    // latitude
]);

// Zod schema for the entire request body
const boundarySchema = z.object({
  propertyId: z.string().min(1),
  coordinates: z.array(coordinateSchema).min(3, {
    message: "At least 3 coordinates are required to form a polygon"
  }).refine(coords => {
    // Check if first and last coordinates are the same (closed polygon)
    const first = coords[0];
    const last = coords[coords.length - 1];
    return first[0] === last[0] && first[1] === last[1];
  }, {
    message: "Polygon must be closed (first and last coordinates should match)"
  })
});

export const validateCoordinates = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Validate request body against schema
    const result = boundarySchema.safeParse(req.body);
    
    if (!result.success) {
      return res.status(400).json({
        error: "Invalid coordinates data",
        details: result.error.issues.map(issue => ({
          path: issue.path.join('.'),
          message: issue.message
        }))
      });
    }

    // Additional validation for polygon geometry
    const { coordinates } = result.data;
    
    // Check for self-intersections (simple implementation)
    if (hasSelfIntersections(coordinates)) {
      return res.status(400).json({
        error: "Polygon has self-intersections which are not allowed"
      });
    }

    // Attach validated data to request object
    req.validatedData = result.data;
    next();
  } catch (error) {
    console.error('Validation error:', error);
    res.status(500).json({ error: "Internal server error during validation" });
  }
};

// Helper function to detect simple self-intersections
function hasSelfIntersections(coords: [number, number][]): boolean {
  // This is a simplified implementation
  // For production, consider using a proper geometry library like turf.js
  const uniqueCoords = new Set(coords.map(c => `${c[0]},${c[1]}`));
  return uniqueCoords.size < coords.length - 1; // -1 because first/last should match
}