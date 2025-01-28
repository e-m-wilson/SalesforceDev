public with sharing class AuraWithIntegrations {
    public AuraWithIntegrations() {

    }

    @AuraEnabled 
    public static String searchPokemon(String name) {
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://pokeapi.co/api/v2/pokemon/' + name);
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        // If the request is successful, parse the JSON response.
        if(response.getStatusCode() == 200) {
            // Deserialize the JSON string into collections of primitive data types.
            Map<String, Object> results = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
            Map<String, Object> sprites = (Map<String, Object>) results.get('sprites');

            QueueableExample qe = new QueueableExample((string) sprites.get('front_default'));
            System.enqueueJob(qe);

            return (string) sprites.get('front_default');
            
            
        } else {
            return 'Couldn\'t get image link';
        }
    }
}