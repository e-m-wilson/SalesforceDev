public with sharing class VisualforceInlineEdit {
    
    // setting our controller/required for extensions
    public VisualforceInlineEdit(ApexPages.StandardSetController controller) {
        ssc = controller;
    }

    // setting the controller/required for extensions
    public ApexPages.StandardSetController ssc;
    
    // used in Page.InlineEditExample to reset the page while cancelling 
    public PageReference cancel() {
        return Page.InlineEditExample;
    }

   
}