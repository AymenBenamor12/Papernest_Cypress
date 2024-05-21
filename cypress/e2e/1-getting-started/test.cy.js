describe('Papernest Onboarding Test', () => {
    const ancienlogement = "113 Rue Lecourbe 75015 Paris"; 
    const nouveaulogement = "157 Boulevard Macdonald 75019 Paris";
    const first_name = "Aymen";
    const last_name = "BENAMOR";
    const phone_number = "0600000000";
    var user_email = `user${Cypress._.uniqueId()}test@papernest.com`;
  
    it('should complete the onboarding process', () => {
      cy.visit('https://app.papernest.com/onboarding?anonymous&anonymousId=test&id_text=1&destination=newspaper');
      cy.viewport(1920, 1080); // Maximize the window
  
      cy.get('#popin-poste-classic').click();
      cy.get('#poste-subscription\\.begin_date').click();
      
      cy.get('[aria-label="30 mai 2024"]').click();
      cy.get('#old_housing\\.address').type(ancienlogement);
      cy.get('li').contains(ancienlogement).click();
  
      cy.get('#housing\\.address').type(nouveaulogement);
      cy.get('li').contains(nouveaulogement).click();
  
      cy.get('#button_next').click(); // Handle cookie banner
      cy.get('.banner-container__agree').click();
      cy.wait(3000);
      cy.get('#offer_poste_6').click();
     
     
      cy.get('#user\\.email').type(user_email);
      
      cy.get('#user\\.phone_number').type(phone_number);
      
      cy.get('#user\\.civility-mister').click();
      
      cy.get('#user\\.first_name').type(first_name);
      
      cy.get('#user\\.last_name').type(last_name);
  
       // Wait for the next button to become clickable
       cy.wait(5000);
      cy.get('#button_next').click();
  
      cy.get('#poste-subscription\\.confirmation_code_destination-post_office').click();
      cy.wait(3000);
      cy.get('#button_next').click();
  
      cy.wait(3000);
      cy.get('#button_next_summary').click();
  
      cy.wait(3000);
      cy.get('#undefined > .title').should('have.text', "Il ne vous reste plus qu'à payer la redirection");
  
      // Take a screenshot
      cy.screenshot('screenshot');
      
    });
  });
  