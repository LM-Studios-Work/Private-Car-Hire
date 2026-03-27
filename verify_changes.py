from playwright.sync_api import sync_playwright
import time

def run_cuj(page):
    page.goto("http://localhost:3000")
    page.wait_for_timeout(1000)

    # Hover Services dropdown (desktop)
    services_btn = page.get_by_role("button", name="Services")
    services_btn.hover()
    page.wait_for_timeout(1000)

    # Focus Services dropdown (desktop)
    services_btn.focus()
    page.wait_for_timeout(1000)

    # Focus Book Online button (desktop)
    book_online_btn = page.locator("a:has-text('Book Online')").first
    book_online_btn.focus()
    page.wait_for_timeout(1000)

    # Take screenshot of desktop focused state
    page.screenshot(path="/home/jules/verification/screenshots/verification-desktop.png")
    page.wait_for_timeout(500)

    # Switch to mobile view
    page.set_viewport_size({"width": 375, "height": 812})
    page.wait_for_timeout(1000)

    # Open mobile menu
    menu_btn = page.get_by_role("button", name="Open mobile menu")
    menu_btn.click()
    page.wait_for_timeout(1000)

    # Focus Services dropdown (mobile)
    services_btn_mobile = page.get_by_role("button", name="Services")
    services_btn_mobile.focus()
    page.wait_for_timeout(1000)

    # Take screenshot of mobile focused state
    page.screenshot(path="/home/jules/verification/screenshots/verification-mobile.png")
    page.wait_for_timeout(500)

    # Close mobile menu
    close_btn = page.get_by_role("button", name="Close mobile menu")
    close_btn.click()
    page.wait_for_timeout(1000)


if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
