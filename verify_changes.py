from playwright.sync_api import sync_playwright

def verify_navbar_accessibility():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Create a new context with desktop viewport to test desktop menu
        desktop_context = browser.new_context(viewport={'width': 1280, 'height': 720})
        desktop_page = desktop_context.new_page()

        try:
            print("Navigating to local server...")
            desktop_page.goto("http://localhost:3000")

            print("Taking screenshot of desktop navbar...")
            # Wait for the navbar to be visible
            desktop_page.wait_for_selector('nav')
            desktop_page.screenshot(path="desktop_navbar_verification.png")

            # Find the Services button
            print("Checking desktop Services button attributes...")
            services_btn = desktop_page.locator('button', has_text="Services").first

            # Verify aria attributes
            aria_expanded = services_btn.get_attribute("aria-expanded")
            aria_haspopup = services_btn.get_attribute("aria-haspopup")
            print(f"Services button aria-expanded: {aria_expanded}")
            print(f"Services button aria-haspopup: {aria_haspopup}")

            # Click the services button to verify focus and dropdown
            print("Clicking Services button to verify focus and dropdown...")
            services_btn.click()
            desktop_page.wait_for_timeout(500) # Wait for animation/state change
            desktop_page.screenshot(path="desktop_services_dropdown_verification.png")

        finally:
            desktop_context.close()

        # Create a new context with mobile viewport to test mobile menu
        mobile_context = browser.new_context(viewport={'width': 375, 'height': 667})
        mobile_page = mobile_context.new_page()

        try:
            print("Navigating to local server (mobile view)...")
            mobile_page.goto("http://localhost:3000")

            # Find the mobile menu open button
            print("Checking mobile menu open button attributes...")
            # Use aria-label to find the new button
            menu_btn = mobile_page.locator('button[aria-label="Open mobile menu"]').first

            aria_label = menu_btn.get_attribute("aria-label")
            aria_expanded = menu_btn.get_attribute("aria-expanded")
            print(f"Mobile menu button aria-label: {aria_label}")
            print(f"Mobile menu button aria-expanded: {aria_expanded}")

            # Take screenshot before opening
            mobile_page.screenshot(path="mobile_navbar_closed_verification.png")

            # Open mobile menu
            print("Opening mobile menu...")
            menu_btn.click()
            mobile_page.wait_for_timeout(500) # Wait for animation
            mobile_page.screenshot(path="mobile_navbar_opened_verification.png")

            # Check mobile close button
            print("Checking mobile menu close button attributes...")
            close_btn = mobile_page.locator('button[aria-label="Close mobile menu"]').first
            aria_label_close = close_btn.get_attribute("aria-label")
            print(f"Mobile close button aria-label: {aria_label_close}")

            print("Verification script completed successfully.")
        finally:
            mobile_context.close()
            browser.close()

if __name__ == "__main__":
    import time
    # Wait a few seconds for the dev server to start
    print("Waiting for dev server to be ready...")
    time.sleep(5)
    verify_navbar_accessibility()
