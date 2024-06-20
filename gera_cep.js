const puppeteer = require('puppeteer')

const delay = (delayInms) => {
  return new Promise(resolve => setTimeout(resolve, delayInms));
};

module.exports = async function buscacep(estado, cidade) {

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage()
  await page.goto('https://www.4devs.com.br/gerador_de_cep');
  await page.select('#cep_estado', estado.toUpperCase());
  await delay(200)
  await page.select('#cep_cidade', cidade);
  await page.screenshot({ path: 'teste.png' })
  await page.click('#btn_gerar_cep')
  await delay(200)

  const cep = await page.$eval('#cep', el => el.innerText);
  console.log(cep)
  
  await browser.close();  
  return cep;
}

