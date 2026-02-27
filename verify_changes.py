import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Navigate to the page
        await page.goto("http://localhost:3000")

        # Verify Floating WhatsApp Button
        whatsapp_link = page.locator('a[aria-label="Contact us on WhatsApp"]')
        if await whatsapp_link.count() > 0:
            print("WhatsApp button found with correct aria-label")
        else:
            print("WhatsApp button NOT found or missing aria-label")

        # Verify Quote Form Inputs
        # Since there are two forms (desktop/mobile), we expect multiple elements.
        # We can just verify at least one exists or iterate.
        inputs = page.locator('input[aria-label="Full Name"]')
        count = await inputs.count()
        if count >= 2:
             print(f"Found {count} 'Full Name' inputs with correct aria-label (Desktop & Mobile)")
        else:
             print(f"WARNING: Found only {count} 'Full Name' inputs")

        inputs = page.locator('input[aria-label="Phone Number"]')
        count = await inputs.count()
        if count >= 2:
             print(f"Found {count} 'Phone Number' inputs with correct aria-label")

        # Verify Select Trigger
        triggers = page.locator('button[aria-label="Select Service"]')
        count = await triggers.count()
        if count >= 2:
             print(f"Found {count} 'Select Service' triggers with correct aria-label")

        inputs = page.locator('input[aria-label="Pickup Location"]')
        count = await inputs.count()
        if count >= 2:
             print(f"Found {count} 'Pickup Location' inputs with correct aria-label")


        # Verify Service Cards Links (checking a few examples)
        # These are unique per card, so count should be 1
        car_hire_link = page.locator('a[href="/services/car-hire"][aria-label="Read more about Car Hire"]')
        if await car_hire_link.count() > 0:
             print("Car Hire link found with correct aria-label")
             # Verify it contains a span, not a button
             span_count = await car_hire_link.locator('span').count()
             button_count = await car_hire_link.locator('button').count()
             if span_count > 0 and button_count == 0:
                 print("Car Hire link correctly contains span and NO button")
             else:
                 print(f"Car Hire link structure INCORRECT: spans={span_count}, buttons={button_count}")
        else:
             print("Car Hire link NOT found with correct aria-label")

        # Fleet link appears twice (Desktop/Mobile hero)
        fleet_link = page.locator('a[href="#fleet"][aria-label="View our fleet of vehicles"]')
        count = await fleet_link.count()
        if count >= 2:
             print(f"Found {count} 'View Fleet' links with correct aria-label")
             # Check first one
             first_link = fleet_link.first
             span_count = await first_link.locator('span').count()
             button_count = await first_link.locator('button').count()
             if span_count > 0 and button_count == 0:
                 print("First View Fleet link correctly contains span and NO button")
        else:
             print(f"WARNING: Found only {count} 'View Fleet' links")

        # Take a screenshot
        await page.screenshot(path="verification_screenshot.png", full_page=True)
        print("Screenshot saved to verification_screenshot.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
