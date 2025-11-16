# Lightspeed Support Theme

A custom Jekyll theme for Lightspeed Support documentation, based on the Cayman theme.

## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "lightspeed-support"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: lightspeed-support
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install lightspeed-support

## Usage

To use this theme, set it in your `_config.yml`:

```yaml
theme: lightspeed-support
title: Your Site Title
description: Your site description
```

## Customization

You can customize the theme by overriding the default variables in your own `assets/css/style.scss` file:

```scss
---
---

@import "jekyll-theme-lightspeed-support";

// Custom variables
$header-bg-color: #your-color;
$header-bg-color-secondary: #your-secondary-color;
```

## Layout

The theme includes a default layout that provides:
- Responsive design for mobile, tablet, and desktop
- Header with project name and tagline
- Main content area
- Footer with attribution

## License

CC0 1.0 Universal
