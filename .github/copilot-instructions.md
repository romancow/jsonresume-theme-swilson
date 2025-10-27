# Copilot Instructions for JSON Resume Theme

## Project Overview
This is a custom JSON Resume theme package that renders résumés using Pug templates and Stylus CSS. The theme extends the standard JSON Resume schema with custom fields and supports dynamic theming via URL query parameters.

## Architecture & Key Components

### Core Rendering Flow
- **Entry Point**: `src/index.js` exports a single `render(resume)` function
- **Template Engine**: Pug templates in `src/templates/` with modular mixins
- **Styling**: Stylus files in `src/styles/` compiled inline via Pug filter
- **Utilities**: `src/utilities.js` extends the resume object with helper functions using Sugar.js

### Template Structure
Templates follow a modular pattern:
- `src/template.pug` - Main layout with conditional section includes
- `src/templates/section.pug` - Reusable mixins (`+section()`, `+keywords()`, `+date-range()`)
- Individual section templates (work.pug, education.pug, etc.) use these mixins
- Each template checks `isEmpty(key)` before rendering to handle optional sections

### Styling Architecture
- `src/styles/index.styl` imports all component styles
- `src/styles/colors.styl` defines CSS custom properties for dynamic theming
- Color system uses `$colors` object and utility mixins (`color-primary()`, `color-secondary()`)
- Query string parameters automatically map to CSS variables via `src/include.js`

## Key Patterns & Conventions

### Data Access
Use utility functions instead of direct resume object access:
- `get("basics.name", "Default")` - Safe property access with fallback
- `has("work")` - Check property existence  
- `isEmpty("skills")` - Check if array/object is empty
- `join(["basics.location.city", "basics.location.region"])` - Concatenate values

### Template Mixins
Core mixins in `src/templates/section.pug`:
```jade
+section("icon-name", "Section Title", "Optional Right Text", "right-icon")
+keywords(arrayOfKeywords)
+date-range(objectWithStartEndDate)
```

### Extended Schema Fields
The theme supports additional fields beyond standard JSON Resume:
- `basics.notes[]` - General notes array
- `projects[].icon` - FontAwesome icon names
- `education[].honors[]` - Education honors array
- `references[].at` and `references[].position` - Reference context

### Markdown Support
These fields render markdown via `markdown()` and `markdown.inline()` functions:
- Summary fields, highlights arrays, notes, honors, project descriptions

## Development Workflow

### Testing
- Use `test/resume.json` as sample data
- Test with `resumed` package: `npx resumed render --theme=swilson test/resume.json`
- No build process required - templates compile at runtime

### Styling
- Stylus files auto-compile via Pug's `:stylus` filter
- Use existing color system and mixins rather than hardcoded values
- Test theming with query parameters: `?primary-bg-color=#fff&accent-bg-color=blue`

### Adding New Sections
1. Create template in `src/templates/` using section mixins
2. Add corresponding Stylus file in `src/styles/`
3. Include both in main template and style index
4. Add conditional rendering based on `isEmpty()` check

## Dependencies & External Integration
- **Sugar.js**: Provides extended array/object methods and date formatting
- **markdown-it**: Handles markdown rendering with link attributes plugin
- **FontAwesome**: Icons referenced by name in templates
- **JSON Resume ecosystem**: Compatible with `resume-cli` and `resumed` packages