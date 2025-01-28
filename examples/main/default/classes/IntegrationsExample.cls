@RestResource(urlMapping='/AccountIntegration/*')
global class IntegrationsExample {

    // Is an example of consuming a 3rd party RESTful service
    public static string getJoke() {
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://api.chucknorris.io/jokes/random?category=dev');
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        // If the request is successful, parse the JSON response.
        if(response.getStatusCode() == 200) {
            // Deserialize the JSON string into collections of primitive data types.
            Map<String, Object> results = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
            
            return (String) results.get('value');
            
        } else {
            return 'Failed to get joke.';
        }
    }

   

    @httpGet
    global static Account getAccount() {
        
        String accName = RestContext.request.params.get('name');
        Account acc = [SELECT AnnualRevenue FROM ACCOUNT WHERE Name = :accName LIMIT 1];
        return acc;
        
    }

    @httpPost
    global static String createNewAccount() {
        
        String accName = RestContext.request.params.get('name');
        Account acc = new Account(Name = accName);
        insert acc;
        return acc.Id;
    }
}