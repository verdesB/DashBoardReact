
export const dashBoardFunction = () => {
    const button = document.querySelector('.main__buttonDash');
    const container = document.querySelector('.main__dashboardContainer');
    
    // Ajoutez un gestionnaire d'événements au bouton
    button.addEventListener('click', () => {
      // Basculez entre les classes open et closed sur l'élément main__dashboardContainer
      container.classList.toggle('open');
      container.classList.toggle('closed');
      button.classList.toggle('main__buttonDashOpen')
      
        
      
    });
}
