public without sharing class AttachmentHelper {
    public AttachmentHelper() {

    }

/* 
This takes in any object recordId and then retreives png or jpg files stored as attachements on the record. 
 
The passed in recordid gets the record for junction object, ContentDocumentLink
 SELECT Id, ContentDocument.LatestPublishedVersionId FROM ContentDocumentLink WHERE LinkedEntityId = :recordId

Then we use Ids from above to query the ContentVersion object. We can get a link to the file from the VersionDataUrl field.
SELECT Id, VersionData, ContentUrl, VersionDataUrl FROM ContentVersion WHERE Id IN :cdlIdList
 version data url example: https://dream-customization-7348-dev-ed.scratch.file.force.com/sfc/servlet.shepherd/version/download/0688K000000e2R2


Other notes to get this working:
- Guest user access for experience sites requires some extra setup
- the guest user profile must have read object access to the object with attachments
- a sharing rule must be created that gives guest users record level access to the object with the attachments
- the individual attachments must be manually shared with guest users. Navigate to the attachment, then click 
share > Who can Access > Turn 'Customer Access' on 
 */

@AuraEnabled(cacheable=true)
public static List<ContentVersion> getRecordAttachments(String recordId){
    try {
    
        List<ContentDocumentLink> cdlList = [SELECT Id, ContentDocument.LatestPublishedVersionId FROM ContentDocumentLink WHERE LinkedEntityId = :recordId];
        Set<String> cdlIdList = new Set<String>();
        for(ContentDocumentLink cdl : cdlList) {
            cdlIdList.add(cdl.ContentDocument.LatestPublishedVersionId);
        }
        Set<String> fileTypes = new Set<String>{'jpg', 'png'};
        return [SELECT VersionDataUrl, FileType FROM ContentVersion WHERE Id IN :cdlIdList AND FileType IN :fileTypes];
    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
}
}