## IIS Server Setup

* Added python and pip.
* Added aws-cli `pip install awscli`
* Created 
 * C:\inetpub\update-web.bat:  this deletes the index.html file and runs aws s3 sync on the staging S3 bucket.
 * C:\inetpub\update-map.bat:  this deletes the map_viewer.html file and runs aws s3 sync on the staging S3 bucket.
 * C:\inetpub\update-datagrapher.bat:  this deletes the index.html file and runs aws s3 sync on the staging S3 bucket.

* Added virtual directory between C:\inetpub\ma-ccc-datagrapher => /datagrapher
* Added virtual directory between C:\inetpub\ma-ccc-map => /map
  * Set the default response document to be "map_viewer.html"
* Web is served by the root web site
  * Need to add the reWrite 2.0 extension (https://www.iis.net/downloads/microsoft/url-rewrite) 
  * Add these rules to the site  https://captured-images.s3.amazonaws.com/MA_UAT__2017-09-02_15-20-21.png
