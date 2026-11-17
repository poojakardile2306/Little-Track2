# Little Track — beginner rebuild

This is a simple static website made with HTML, CSS and JavaScript. It does not require React or Node.js.

## What is included
- Responsive homepage and navigation
- Baby hero photo cropped from the screenshot you supplied
- Four feature icons placed below the baby photo
- About, workflow, technology and team sections
- Working Manual and Profile popups
- A local-only demo profile form (data stays in this browser)

## Important limitation
This is a front-end academic demo. It does not connect to a real ESP32-CAM, AI model, medical database, doctor account, SMS service or secure backend. It does not diagnose jaundice or estimate bilirubin. Do not enter real patient information.

## Preview on your computer
1. Extract the ZIP file.
2. Open the extracted `little-track-rebuild` folder.
3. Double-click `index.html` to open the website in your browser.

## Publish on Vercel
1. Sign in to Vercel.
2. Choose **Add New → Project**.
3. If Vercel asks for a Git repository, you can instead use Vercel's supported deployment workflow or connect a GitHub repository.
4. Upload/push the contents of this folder to a new repository, then import that repository in Vercel.
5. Keep Framework Preset as **Other**. Leave Build Command and Output Directory empty/default for this static site.
6. Deploy. Vercel will give you a new live URL.

Your existing `little-track.vercel.app` deployment belongs to the original project/account. Rebuilding these files does not automatically replace that deployment. To use the same domain, you need access to the Vercel project or its domain settings.

## Files
- `index.html` — page content
- `style.css` — design and responsive layout
- `script.js` — menu, manual, profile demo interactions
- `assets/little-track-baby.jpg` — hero photo


SAFETY NOTE: The displayed 7.0 mg/dL and 'Moderate' label are sample/demo text only. Bilirubin interpretation in newborns depends on age in hours, gestational age, and other clinical risk factors. Never use this demo label to make care decisions; a qualified clinician must interpret actual test results.


DEMO RESULT DISPLAY: Recent demo records now show a sample bilirubin value of 7.0 mg/dL, a 'Moderate' sample label, and 'Please consult a doctor.' The phrase '' has been removed from the page text. This is demonstration content only and is not a clinical interpretation or diagnosis.


LATEST DASHBOARD UPDATE: A Recent demo records section has been added with sample entries showing bilirubin level 7.0 mg/dL, Moderate (sample label), and Please consult a doctor. The 'not analysed' status wording has been removed from the project source. Sample values are for layout demonstration only and must not be used for clinical decisions.
