import { Locator, Page } from '@playwright/test'

export class OrderPage {
  readonly page: Page
  readonly statusButton: Locator
  readonly clientName: Locator
  readonly clientPhone: Locator
  readonly createOrderButton: Locator
  readonly okButton: Locator

  constructor(page: Page) {
    this.page = page
    this.statusButton = page.getByTestId('openStatusPopup-button')
    this.clientName = page.getByTestId('username-input')
    this.clientPhone = page.getByTestId('phone-input')
    this.createOrderButton = page.getByTestId('createOrder-button')
    this.okButton = page.getByTestId('orderSuccessfullyCreated-popup-ok-button')
  }

  async createOrder() {
    await this.clientName.fill('Random A. Name')
    await this.clientPhone.fill('123456789')
    await this.createOrderButton.click()
  }
}
