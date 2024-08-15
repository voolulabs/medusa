/**
 * @schema AdminClaimDeleteResponse
 * type: object
 * description: SUMMARY
 * x-schemaName: AdminClaimDeleteResponse
 * required:
 *   - id
 *   - object
 *   - deleted
 * properties:
 *   id:
 *     type: string
 *     title: id
 *     description: The claim's ID.
 *   object:
 *     type: string
 *     title: object
 *     description: The claim's object.
 *     default: claim
 *   deleted:
 *     type: boolean
 *     title: deleted
 *     description: The claim's deleted.
 *   parent:
 *     type: object
 *     description: The claim's parent.
 * 
*/
