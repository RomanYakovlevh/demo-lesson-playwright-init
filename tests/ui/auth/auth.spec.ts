import { expect, test } from '@playwright/test'
import { SERVICE_URL } from '../../../config/env-data'

test('test 1', async ({ page }) => {
  await page.goto(SERVICE_URL)
  const usernameField = page.getByTestId('username-input')
  await usernameField.fill('-')
  const signInButton = page.getByTestId('signIn-button')
  const usernameError = page.getByTestId('username-input-error').nth(0)
  await expect(signInButton).toBeDisabled()
  await expect(usernameError).toBeVisible()
})

test('test 2', async ({ page }) => {
  await page.goto(SERVICE_URL)
  const usernameField = page.getByTestId('username-input')
  await usernameField.fill('askjdbavas')
  const passwordField = page.getByTestId('password-input')
  await passwordField.fill('sjkaskdhjkdjajksaj')
  const signInButton = page.getByTestId('signIn-button')
  await signInButton.click()
  const loginError = page.getByTestId('authorizationError-popup')
  await expect(loginError).toBeVisible()
})

test('test 3', async ({ page }) => {
  await page.goto(SERVICE_URL)
  const usernameField = page.getByTestId('username-input')
  await usernameField.fill('evolution-19')
  const passwordField = page.getByTestId('password-input')
  await passwordField.fill('uP9nZtLo')
  const signInButton = page.getByTestId('signIn-button')
  await signInButton.click()
  const createOrder = page.getByText('Create orderOrder×Order has')
  await expect(createOrder).toBeVisible()
})

test('completely different website', async ({ page }) => {
  await page.goto('https://www.huurwoningen.nl/')
  const login = page.getByText('Login')
  await expect(login).toBeVisible()

})
