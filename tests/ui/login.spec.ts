import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

test('Login to AppRabbit admin dashboard (100% zoom + longer waits)', async ({ page }) => {
  console.log('🔁 Navigating to login page...');
  await page.goto('https://app.apprabbit.com/login', { waitUntil: 'domcontentloaded' });

  // Set zoom to 100%
  await page.evaluate(() => {
    document.body.style.zoom = '1.0';
  });

  // ⏱️ Wait for login screen to fully settle
  await page.waitForTimeout(2000);

  console.log('🧘 Waiting for "Continue with Email" button...');
  const continueWithEmailBtn = page.getByRole('button', { name: 'Continue with Email' });
  await continueWithEmailBtn.waitFor({ state: 'visible', timeout: 15000 });
  await page.waitForTimeout(1500);

  console.log('👆 Clicking "Continue with Email"...');
  await continueWithEmailBtn.click();
  await page.waitForTimeout(2000); // Let UI settle after click

  console.log('⌛ Waiting for Email input...');
  const emailField = page.getByPlaceholder('Email');
  await emailField.waitFor({ state: 'visible', timeout: 15000 });
  await page.waitForTimeout(1000);

  console.log('⌨️ Typing email...');
  await emailField.fill(process.env.EMAIL || '');
  await page.waitForTimeout(1000);

  console.log('🖱️ Clicking second "Continue" button...');
  const continueBtn = page.getByRole('button', { name: 'Continue' });
  await continueBtn.waitFor({ state: 'visible', timeout: 15000 });
  await continueBtn.click();
  await page.waitForTimeout(1000); // Wait for transition to password screen

  console.log('⌛ Waiting for Password field...');
  const passwordField = page.locator('input[type="password"]');
  await passwordField.waitFor({ state: 'visible', timeout: 15000 });
  await page.waitForTimeout(1000);

  console.log('🔑 Typing password...');
  await passwordField.fill(process.env.PASSWORD || '');
  await page.waitForTimeout(1000);

  console.log('🔐 Clicking Login...');
  const loginBtn = page.getByRole('button', { name: 'Log In' });
  await loginBtn.waitFor({ state: 'visible', timeout: 15000 });
  await loginBtn.click();
  await page.waitForTimeout(4000); // Give time for dashboard to load

  console.log('⏳ Waiting for dashboard sidebar to load...');
  const buildAppLabel = page.getByRole('link', { name: 'Build App' });
  await buildAppLabel.waitFor({ state: 'visible', timeout: 20000 });
  await page.waitForTimeout(1000);

  const pricingLabel = page.getByRole('link', { name: 'Pricing' });
  await pricingLabel.waitFor({ state: 'visible', timeout: 20000 });

  expect(await page.url()).toContain('/app/builder');
  console.log('✅ UI Login Test Passed — Dashboard loaded and UI visible!');
});
