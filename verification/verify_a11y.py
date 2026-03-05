from playwright.sync_api import sync_playwright

def verify_a11y(page):
    page.goto("http://localhost:3000")
    page.wait_for_load_state("networkidle")

    # Take screenshot of the desktop navbar specifically focusing on the services button
    # Focus the services button to show the focus-visible ring
    services_btn = page.locator("button:has-text('Services')").first
    services_btn.focus()

    page.screenshot(path="/app/verification/desktop_nav_focus.png")

    # Try mobile view
    page.set_viewport_size({"width": 375, "height": 667})

    # Find mobile menu button and focus it
    mobile_menu_btn = page.get_by_role("button", name="Open mobile menu")
    mobile_menu_btn.focus()

    page.screenshot(path="/app/verification/mobile_menu_focus.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_a11y(page)
        finally:
            browser.close()
