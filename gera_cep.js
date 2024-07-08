const puppeteer = require('puppeteer')
require("dontenv").config()
const executablePath = process.env.PUPPERTEER_EXECUTABLE_PATH || '/usr/bin/google-chrome-stable';


const delay = (delayInms) => {
  return new Promise(resolve => setTimeout(resolve, delayInms));
};

module.exports = async function buscacep(estado, cidade) {
 
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: executablePath,
    args: [
      "--disable-setuid-sandbox",
      "--no-sandbox",
      "--single-process",
      "--no-zygote",],
  });

  const page = await browser.newPage()
  await page.goto('https://www.4devs.com.br/gerador_de_cep');
  await page.select('#cep_estado', estado.toUpperCase());
  await delay(200)
  await page.select('#cep_cidade', cidade);
  await page.click('#btn_gerar_cep')
  await delay(200)

  const cep = await page.$eval('#cep', el => el.innerText);
  console.log(cep)

  await browser.close();
  return cep;
}

