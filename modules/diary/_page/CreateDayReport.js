import AppPage from "../../_page/AppPage";
import {howWasYourDayInputs, hoursStudiedInputs} from "../data/CreatedayReport.data";

class CreateDayReport extends AppPage {

  get diaryLink(){
    return browser.$('//a[@qa="diary-link"]');
  }

  get CreateReportBTN (){
    return browser.$('//a[@qa="create-day-report-button"]');
  }

  get header(){
    return browser.$('//h1');
  }

  get checkMarksTitle(){
    return browser.$('//div[@class="mb-2")');
  }

  get instructionToNeedHelp1(){
    return browser.$('//div[contains(text(), "I need help")]');
  }

  get instructionToNeedHelp2(){
    return browser.$('//label[@for="input-0"]//small[@class="text-secondary"]')
  }

  get instructionToUnderstoodEverything1(){
    return browser.$('//div[contains(text(), "I understood everything")]');
  }
  get instructionToUnderstoodEverything2(){
    return browser.$('//label[@for="input-1"]//small[@class="text-secondary"]');
  }

  get instructionToHelpedClassmates1(){
    return browser.$('small[contains(text(), "Specify to whom and on what topic you helped")]')
  }

  get instructionToHelpedClassmates2(){
    return browser.$('//label[@for="input-2"]//small[@class="text-secondary"]');
  }

  get slogan(){
    return browser.$('//small[@qa="app-slogan"]');
  }

  get moraleLevel(){
    return browser.$('//select[@name="morale"]');
  }

  get howManyHours(){
    return browser.$('//input[@name="hours"]');
  }

  get howWasYourDay(){
    return browser.$('//textarea[@name="description"]');
  }

  get saveBTN(){
    return browser.$('//button[contains(text(), "Save")]');
  }

  get newDayReport(){
    return browser.$('//div[@qa="day-report-item-0"]//div[@qa="description"]');
  }

  get requiredWarningForCheckMarks(){
    return browser.$('')
  }



}