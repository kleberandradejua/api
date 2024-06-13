import puppeteer from 'puppeteer';

async function buscacep(estado, cidade) {

  //estado = document.querySelector('#cep_estado').innerText

    
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage()    
    await page.goto('https://www.4devs.com.br/gerador_de_cep');
    await page.select('#cep_estado', estado.toUpperCase());
    await page.select('#cep_cidade', cidade);
    await page.screenshot({path: 'teste.png'})
    

    await browser.close();

    /*const resultado = await page.evaluate(() => {
        return document.querySelector('#cep').innerText;
      });*/

      console.log(browser)
}

buscacep('rn')