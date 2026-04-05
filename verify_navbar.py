import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()

        # Test Desktop
        page = await browser.new_page(viewport={'width': 1280, 'height': 800})
        await page.goto("http://localhost:3000")

        print("\n--- Desktop View ---")
        services_btn = page.locator('button', has_text="Services").first
        if await services_btn.count() > 0:
            print(f"Services button aria-haspopup: {await services_btn.get_attribute('aria-haspopup')}")
            print(f"Services button aria-expanded: {await services_btn.get_attribute('aria-expanded')}")
            print("Services button found.")
        else:
            print("Services button not found.")

        book_online_link = page.locator('a', has_text="Book Online").first
        if await book_online_link.count() > 0:
            print("Book Online Link found.")
            buttons_inside = book_online_link.locator('button')
            print(f"Buttons inside Book Online Link: {await buttons_inside.count()}")
            print(f"Classes on Book Online Link: {await book_online_link.get_attribute('class')}")
        else:
            print("Book Online link not found.")

        await page.screenshot(path="desktop_screenshot.png")

        # Test Mobile
        page_mobile = await browser.new_page(viewport={'width': 375, 'height': 667})
        await page_mobile.goto("http://localhost:3000")

        print("\n--- Mobile View ---")
        open_menu_btn = page_mobile.locator('button[aria-label="Open mobile menu"]')
        if await open_menu_btn.count() > 0:
            print("Open menu button found.")
            print(f"aria-controls: {await open_menu_btn.get_attribute('aria-controls')}")
            print(f"aria-expanded: {await open_menu_btn.get_attribute('aria-expanded')}")

            # Click to open
            await open_menu_btn.click()
            await page_mobile.wait_for_timeout(500) # wait for animation/render

            close_menu_btn = page_mobile.locator('button[aria-label="Close mobile menu"]')
            if await close_menu_btn.count() > 0:
                print("Close menu button found.")
                print(f"aria-controls: {await close_menu_btn.get_attribute('aria-controls')}")
                print(f"aria-expanded: {await close_menu_btn.get_attribute('aria-expanded')}")
            else:
                print("Close menu button not found.")

            mobile_menu = page_mobile.locator('#mobile-menu')
            if await mobile_menu.count() > 0:
                print("Mobile menu container found with correct ID.")
            else:
                print("Mobile menu container with ID not found.")
        else:
            print("Open menu button not found.")

        await page_mobile.screenshot(path="mobile_screenshot.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
