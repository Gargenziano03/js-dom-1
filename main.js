/*Consegna
Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)
BONUS
Facciamo accendi e spegni:
Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
E così via...
Per fare questo bonus potremmo aver bisogno del metodo string.includes()
*/

//FASE 1: Seleziono gli elementi della DOM
const buttonEl = document.getElementById('button');
const lampadinaSpenta = documment.getElementById('spegni')
const lampadinaAccesa = document.getElementById('accendi')

lampadinaAccesa.classList.add('d-none');

//FASE 2: Colleghiamo un element list al pulsante 
buttonEl.addEventListener('click', () => {
    lampadinaSpenta.classList.add('d-none');
    lampadinaAccesa.classList.remove('d-none');
})