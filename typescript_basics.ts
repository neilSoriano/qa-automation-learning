// Why TypeScript Matters for QA Automation
// Most Playwright job postings ask for TypeScript
// TypeScript is JavaScript with type safety added on top
// If you already know JS, then you are 90% there

// TypeScript lets you decalre what type a variable, parameter, or return value should be
// Compiler catches mistakes before your code runs

// JavaScript - no type safety
// let username = "qa tester";
// username = 42;      // no error, but this is a bug


// TypeScript - catches the mistake
// let username: string = "qa tester";
// username = 42;      // ERROR: Type 'number' is not assignable to type 'string'.


// Key Differences from JavaScript
// file extension is .ts instead of .js
// import/export instead of require/model.exports
// TypeScript compiler (tsc) checks for errors before running
// Playwright CLI handles compialtion automatically


// Basic Type Annotations
let sname: string = "Aston";
let age: number = 30;
let isActive: boolean = true;
let tools: string[] = ["playwright", "cypress"];

// Function Types

function greet(name: string): string {
    return("Hello " + name);
}

function addNumber(a: number, b: number): number {
    return a + b;
}

// void means the function retuns nothing
function logMessage(msg: string): void {
    console.log(msg);
}


// Interfaces: Defining Object Shapes
// great for test data objects and Page Object constructor params

interface User {
    username: string;
    password: string;
    role?: string       // optional property
}

const testUser: User = {
    username: "qa_tester",
    password: "secret123"
}


// TypeScript in Playwright Tests
// typical test looks like:

import { test, expect, Page } from '@playwright/test';
class LoginPage {
private page: Page;
private usernameInput = '#user-name';
private passwordInput = '#password';
private loginButton = '#login-button';
constructor(page: Page) {
this.page = page;
}
async login(username: string, password: string): Promise<void> {
await this.page.fill(this.usernameInput, username);
await this.page.fill(this.passwordInput, password);
await this.page.click(this.loginButton);
}
}
test('valid login', async ({ page }) => {
const loginPage = new LoginPage(page);
await page.goto('https://www.saucedemo.com/');
await loginPage.login('standard_user', 'secret_sauce');
await expect(page).toHaveURL(/inventory/);
});


// Setting up TypeScript in a Playwright Project
// npm init playwright@latest
// # Choose TypeScript when prompted

// tsconfig.json and .ts test files automatically created

