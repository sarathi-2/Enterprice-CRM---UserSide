# Orbit CRM – User Panel

A responsive CRM employee workspace built with React, TypeScript, Redux Toolkit, Tailwind CSS and Recharts.

## Run locally
1. Install Node.js 18+.
2. Extract this folder and open it in VS Code.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL shown by Vite.

## Build
`npm run build`

## Included modules
- Demo authentication flow: login, forgot password, OTP verification, reset password
- Overview dashboard and performance charts
- Lead management with add lead, search and status updates
- Kanban sales pipeline with editable stages
- Customer directory
- Task management with completion tracking and quick-add
- Activity timeline
- Reports and analytics
- Notifications
- Profile and settings
- Light/dark theme toggle (top-right moon/sun button)
- Responsive desktop, tablet and mobile navigation

## Demo access
The login screen is a frontend demo. Any valid email and password (8+ characters) will enter the workspace. Forgot-password, OTP and reset-password screens are UI flows only.

## Integration notes
Data is stored in the Redux store for the current browser session. Replace demo reducers with API calls and persist authentication securely when connecting your backend. Role-based route/API authorization should be enforced by the server; the role shown in the UI is illustrative.
