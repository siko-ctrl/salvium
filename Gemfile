source "https://rubygems.org"

gem "jekyll", "~> 4.2.0"
gem "webrick", "~> 1.7"
gem "json", "~> 2.6.3"

group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-paginate-v2"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
  gem "jekyll-minifier"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]