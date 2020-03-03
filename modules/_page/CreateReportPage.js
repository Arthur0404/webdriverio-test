import AppPage from "./AppPage";

class CreateReportPage extends AppPage {

  get diaryLink(){
    return browser.$('//a[@qa="diary-link"]');
  }

  get createDayReportBTN(){
    return browser.$('//a[@qa="create-day-report-button"]');
  }

  get h1(){
    return browser.$('//h1');
  }

  get checkMarksTitle(){
    return browser.$('//div[contains(@class, "mb-2")]//strong');
  }

  get needHelp (){
    return browser.$('//input[@id="input-0"]') && browser.$('//input[@label="i need help"]');
  }

  get understoodEverything(){
    return browser.$('//input[@id="input-1"]');
  }

  get helpedClassmates(){
    return browser.$('//input[@id="input-2"]');
  }

  get watchedLectures(){
    return browser.$('//input[@id="input-3"]');
  }

  get readDocumentation(){
    return browser.$('//input[@id="input-4"]');
  }

  get codePractice(){
    return browser.$('//input[@id="input-5"]');
  }

  get quizPractice(){
    return browser.$('//input[@id="input-6"]');
  }

  get interviewPreparation(){
    return browser.$('//input[@id="input-7"]');
  }

  get recruiterPhoneCall(){
    return browser.$('//input[@id="input-8"]');
  }

  get interviewTechnicalScreen(){
    return browser.$('//input[@id="input-9"]');
  }

  get interviewOnsite(){
    return browser.$('//input[@id="input-10"]');
  }

  get jobOffer(){
    return browser.$('//input[@id="input-11"]');
  }

  get instructionToNeedHelp1(){
    return browser.$('//label[@for="input-0"]//small');
  }

  get instructionToNeedHelp2(){
    return browser.$('//div[@innertext="Describe what difficulties you have, we will contact you and help"]');
  }















}