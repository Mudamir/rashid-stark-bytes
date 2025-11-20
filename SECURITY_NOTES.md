# Security Notes

## npm Audit Vulnerability (esbuild)

**Status:** Moderate severity vulnerability in esbuild <=0.24.2  
**Impact:** Development server only (not production builds)  
**CVE:** GHSA-67mh-4wv8-2f99

### Details
The vulnerability allows any website to send requests to the development server and read responses. This only affects the local development server (`npm run dev`), not production builds.

### Current Status
- Vite 5.4.21 uses esbuild 0.24.2 (vulnerable)
- Fix requires upgrading to Vite 7.x (breaking change)
- No patch available for esbuild 0.24.x series yet

### Recommendations

**Option 1: Accept the risk (Recommended for now)**
- The vulnerability only affects local development
- Production builds are not affected
- Only use the dev server on trusted networks
- Monitor for updates

**Option 2: Upgrade to Vite 7 (Breaking change)**
```bash
npm install vite@latest --save-dev
```
⚠️ This may require code changes. Test thoroughly after upgrading.

**Option 3: Use production build for testing**
```bash
npm run build
npm run preview
```
This bypasses the vulnerable dev server entirely.

### Monitoring
Check for updates regularly:
```bash
npm audit
npm outdated vite
```

## Python Backend

Updated `backend/requirements.txt` to use newer package versions compatible with Python 3.13:
- FastAPI >= 0.115.0
- Pydantic >= 2.10.0
- These versions have pre-built wheels for Python 3.13

