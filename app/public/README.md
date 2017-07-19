# The `public` folder

The public folder contains files which a user of our application will need to access in order for the application to work properly. These are files which aren't generated on the fly (that's what the [views](../views) folder is for).

Anything you put in the `public` folder will be accessible to the public. That's why we've named it `public`. It doesn't _have to_ be called `public`; it could be called `apples` or `James` or anything we like, but it makes the most sense to call it `public`.

Common types of files you'll find in the `public` folder are:

- images - pngs, jpgs and gifs you want to appear on your website
- stylesheets - any CSS files which affect the appearance of your site
- PDFs - if you'd like to include your CV as a download on your site, you could add it to the `public` folder and include a link or your site
- anything else - there's no restriction to what files you can make available to people browsing your website

## Files included in the starter pack

- `reset.css` - this stylesheet applies minimal CSS. It's unlikely you'll notice the affects of this file. Its purpose is to smooth out the slight differences between how browsers display HTML by default.
- `styles.css` - this stylesheet includes lots of styles for your application, changing the fonts, colours and spacing of elements.

## A note about security

While you may not publicise the exact URLs that will lead to all these files, you should think twice about putting anything in the public folder that you don't want to share with the world. While it's unlikely that anyone will pilfer the contents and do anything malicious, you should only include files which you'd be happy to have go viral, because that _could_ happen.
