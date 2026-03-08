from playwright.sync_api import sync_playwright

def verify_navbar_accessibility():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Test desktop first
        page = browser.new_page(viewport={"width": 1280, "height": 800})
        page.goto("http://localhost:3000")

        # Wait for page to be ready
        page.wait_for_selector("text=Services")

        # Test Desktop Services Dropdown focus and aria attributes
        services_btn = page.locator("button:has-text('Services')").first

        # Focus element to show focus-visible styles
        services_btn.focus()

        # Take screenshot of the focused desktop services button
        page.screenshot(path="desktop_services_focus.png")

        # Test mobile viewport
        page.set_viewport_size({"width": 375, "height": 812})

        # Open mobile menu button
        mobile_menu_btn = page.locator("button[aria-label='Open mobile menu']")

        # Focus element to show focus-visible styles
        mobile_menu_btn.focus()

        # Take screenshot of focused mobile menu button
        page.screenshot(path="mobile_menu_btn_focus.png")

        # Click to open
        mobile_menu_btn.click()

        # Wait for mobile menu to open (wait for the close button to be visible instead)
        page.wait_for_selector("button[aria-label='Close mobile menu']")

        # Mobile Services Dropdown toggle focus
        mobile_services_btn = page.locator("button:has-text('Services')").last
        mobile_services_btn.focus()

        # Take screenshot of focused mobile services button inside menu
        page.screenshot(path="mobile_services_btn_focus.png")

        # Close button focus
        close_btn = page.locator("button[aria-label='Close mobile menu']")
        close_btn.focus()

        # Take screenshot of focused close button
        page.screenshot(path="mobile_close_btn_focus.png")

        browser.close()

if __name__ == "__main__":
    verify_navbar_accessibility()
