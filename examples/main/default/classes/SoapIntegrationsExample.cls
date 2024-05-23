global class SoapIntegrationsExample {
    public SoapIntegrationsExample() {

    }

    webservice static void createAccount(String accName) {
        Account acc = new Account(name=accName);
        insert acc;
    }

}