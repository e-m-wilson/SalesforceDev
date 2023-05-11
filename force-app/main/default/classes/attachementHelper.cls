public with sharing class attachementHelper {
    public attachementHelper() {

    }


/* This takes in any object recordIds and then retreives png or jpg files stored as attachements on the records. */
// V - passed in the record id and gets the record for junction object, ContentDocumentLink
// SELECT Id, ContentDocument.LatestPublishedVersionId FROM ContentDocumentLink WHERE LinkedEntityId = '0068K000005v81RQAQ'
//0688K000000e2R2QAI
// V - Use Id from above to query ContentVersion object. We can get a link to the file from the VersionDataUrl field.
//SELECT Id, VersionData, ContentUrl, VersionDataUrl FROM ContentVersion WHERE Id = '0688K000000e2R2QAI'
// version data url: https://dream-customization-7348-dev-ed.scratch.file.force.com/sfc/servlet.shepherd/version/download/0688K000000e2R2

    @AuraEnabled(cacheable=true)
    public static List<ContentVersion> getRecordAttachments(List<String> recordIds){
        try {
            Set<String> idSet = new Set<String>();
            for(String s : recordIds){
                idSet.add(s);
            }
            List<ContentDocumentLink> cdlList = [SELECT Id, ContentDocument.LatestPublishedVersionId FROM ContentDocumentLink WHERE LinkedEntityId IN :idSet];
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

