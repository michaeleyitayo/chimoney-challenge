import { Router } from "express";
import * as propertiesController from "../controllers/properties";

/**
 * @swagger
 * /api/properties?limit=5&page=2:
 *   get:
 *     summary: Retrieve all properties
 *     description: Retrieve a list of all properties. The limit is 10 by default, but you can pass limit needed in query params. Also retrieves 1st page by default unless specified in query params
 *     parameters:
 *        - in: query
 *          name: limit
 *          description: The number of properties to fetch. Default is 10
 *          schema:
 *            type: number
 *        - in: query
 *          name: page
 *          description: For pagination, the set of properties to be fetched. Default is 1
 *          schema:
 *            type: number
 *     responses:
 *        '200':
 *            description: A successful response
 *        '500':
 *            description: Server Error
 *
 *
 * /api/properties:
 *   post:
 *     summary: Create new property
 *     description: Create a new property
 *     consumes:
 *        - application/json
 *     parameters:
 *        - in: body
 *          name: property
 *          description: The property to create.
 *          schema:
 *            type: object
 *            properties:
 *              required:
 *               - ownerName
 *               - propertyNickname
 *               - fullAddress
 *               - propertyType
 *               - bedrooms
 *               - bathrooms
 *               - garages
 *              ownerName:
 *                type: string
 *                description: Property owner's name
 *              propertyNickname:
 *                type: string
 *                description: Popular name for property
 *              fullAddress:
 *                type: string
 *                description: Full address for Property
 *              propertyType:
 *                type: string
 *                description: Type of property
 *              bedrooms:
 *                type: number
 *                description: Number of bedrooms
 *              bathrooms:
 *                type: number
 *                description: Number of bathrooms
 *              garages:
 *                type: number
 *                description: NUmber of garages
 *            example:
 *               ownerName: Michael Eyitayo
 *               propertyNickname: Michael's mansion
 *               fullAddress: Lekki Pahse I
 *               propertyType: Duplex
 *               bedrooms: 5
 *               bathrooms: 5
 *               garages: 1
 *
 *
 *     responses:
 *        '201':
 *            description: Property created successfully
 *        '400':
 *            description: Request body validation error
 *        '500':
 *            description: Server Error
 *
 * /api/properties/{propertyId}:
 *   patch:
 *     summary: Edit property
 *     description: Edit existing propery
 *     parameters:
 *        - in: path
 *          name: propertyId
 *          schema:
 *            type: string
 *          required: true
 *          description: The property id
 *        - in: body
 *          name: property-details
 *          description: The property to update with.
 *          schema:
 *             type: object
 *             properties:
 *               ownerName:
 *                 type: string
 *                 description: Property owner's name
 *               propertyNickname:
 *                 type: string
 *                 description: Popular name for property
 *               fullAddress:
 *                 type: string
 *                 description: Full address for Property
 *               propertyType:
 *                 type: string
 *                 description: Type of property
 *               bedrooms:
 *                 type: number
 *                 description: Number of bedrooms
 *               bathrooms:
 *                 type: number
 *                 description: Number of bathrooms
 *               garages:
 *                 type: number
 *                 description: NUmber of garages
 *             example:
 *                ownerName: Michael Eyitayo
 *                propertyNickname: Michael's mansion
 *                fullAddress: Lekki Pahse I
 *                propertyType: Duplex
 *                bedrooms: 5
 *                bathrooms: 5
 *                garages: 1
 *
 *
 *
 *     responses:
 *        '201':
 *            description: Property created successfully
 *        '400':
 *            description: Request body validation error
 *        '500':
 *            description: Server Error
 */

const propertiesRouter = Router();

propertiesRouter
  .get("/", propertiesController.fetchProperties)
  .post("/", propertiesController.addProperty)
  .patch("/:propertyId", propertiesController.editProperty);

export default propertiesRouter;
