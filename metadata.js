function root(css){
var xdx = document.createElement("link");
xdx.href = "data:text/css;base64,"+css;
xdx.rel = "stylesheet";
document.head = document.head || document.getElementsByTagName('head')[0];
document.head.appendChild(xdx);
}
root("LyogQ0xFQVIgKi8KLmNsZWFye2NsZWFyOmJvdGh9Ci5jbGVhcjphZnRlcnt2aXNpYmlsaXR5OmhpZGRlbjtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbnRlbnQ6IiAiO2NsZWFyOmJvdGg7aGVpZ2h0OjB9Ci8qIEJPRFkgKi8KYm9keSB7bWFyZ2luOjA7cGFkZGluZzowO2JhY2tncm91bmQ6I2ZmZmZmZjtjb2xvcjojMjEyMTIxO2ZvbnQ6NDAwIDE0cHggR29vZ2xlIFNhbnMsc2Fucy1zZXJpZjt0ZXh0LWFsaWduOmxlZnQ7fQpib2R5ICoge21heC1oZWlnaHQ6IDk5OTk5OTllbTstbW96LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7fQphIHt0ZXh0LWRlY29yYXRpb246IG5vbmV9CiNteUlkQmxvZ3tkaXNwbGF5Om5vbmU7fQovKiBNT0JJTEUgKi8KLm1vYmlsZXt0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW46MDtmb250LXNpemU6MDtwYWRkaW5nOjA7fQovKiBCTE9HICovCiNibG9ne2JveC1zaXppbmc6Ym9yZGVyLWJveDtiYWNrZ3JvdW5kOiNmMmYyZjI7bWF4LXdpZHRoOjEwMDBweDttYXJnaW46MCBhdXRvO3BhZGRpbmc6MDtvdmVyZmxvdzpoaWRkZW59Ci8qIEhFQURFUiAqLwojaGVhZGVyLWNvbnRhaW5lcntwYWRkaW5nOjEwcHg7bWFyZ2luOjA7fQojaGVhZGVyLXdyYXBwZXJ7Ym94LXNpemluZzpib3JkZXItYm94O21heC13aWR0aDoxMDAwcHg7d2lkdGg6MTAwJTtwb3NpdGlvbjpyZWxhdGl2ZTt9Ci5oZWFkZXJ7ZmxvYXQ6bGVmdDt9Ci5oZWFkZXIgaDEudGl0bGUsLmhlYWRlciBwLnRpdGxle2ZvbnQtd2VpZ2h0OjUwMDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7bWFyZ2luOjA7cGFkZGluZzowO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjEwMCU7fQouaGVhZGVyIC5kZXNjcmlwdGlvbntjb2xvcjojMWYzYTkzO21hcmdpbjowO3BhZGRpbmc6MDtmb250LXNpemU6MTVweDtkaXNwbGF5Om5vbmV9Ci5oZWFkZXIgYSwuaGVhZGVyIGE6aG92ZXJ7Y29sb3I6IzMzMzMzMzt9Ci5oZWFkZXIgaW1ne3dpZHRoOmF1dG87bWFyZ2luOjA7bWF4LWhlaWdodDo0MHB4O30KLyogTkFWSEVBREVSICovCi5oZWFkZXItbmF2aWdhdGlvbntmbG9hdDpyaWdodDtwYWRkaW5nOjVweDtiYWNrZ3JvdW5kOiNmZjU3MzM7Ym9yZGVyLXJhZGl1czoxMHB4O30KLmhlYWRlci1uYXZpZ2F0aW9uIHN2Z3t3aWR0aDoyMHB4O2hlaWdodDoyMHB4O3ZlcnRpY2FsLWFsaWduOi01cHg7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0IWltcG9ydGFudDtjb250ZW50OiYjMzk7JiMzOTt9Ci5oZWFkZXItbmF2aWdhdGlvbiBzdmcgcGF0aHtmaWxsOiNmZmZmZmY7fQouaGVhZGVyLW5hdmlnYXRpb24gLmNoZWNrOmNoZWNrZWR+Lk5hdk1lbnV7b3BhY2l0eToxO3Zpc2liaWxpdHk6dmlzaWJsZTt0b3A6NTBweDtib3gtc2l6aW5nOmJvcmRlci1ib3g7ei1pbmRleDo5OTk7dHJhbnNpdGlvbjphbGwgLjVzIGVhc2U7fQouaGVhZGVyLW5hdmlnYXRpb24gLmljb24gLm9wZW57ZGlzcGxheTpibG9jazt9Ci5oZWFkZXItbmF2aWdhdGlvbiAuaWNvbiAuY2xvc2V7ZGlzcGxheTpub25lO30KLmhlYWRlci1uYXZpZ2F0aW9uIC5jaGVjazpjaGVja2VkIH4gLmljb24gLm9wZW57ZGlzcGxheTpub25lO30KLmhlYWRlci1uYXZpZ2F0aW9uIC5jaGVjazpjaGVja2VkIH4gLmljb24gLmNsb3Nle2Rpc3BsYXk6YmxvY2s7fQouaGVhZGVyLW5hdmlnYXRpb24gLk5hdk1lbnV7b3BhY2l0eTowO3Zpc2liaWxpdHk6aGlkZGVuO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7dG9wOjA7aGVpZ2h0OmF1dG87d2lkdGg6MzAwcHg7YmFja2dyb3VuZDojZmZmZmZmO2JvcmRlci1yYWRpdXM6MTBweDtib3gtc2hhZG93OjAgM3B4IDhweCAycHggcmdiYSgwLDAsMCwwLjMpO30KLmhlYWRlci1uYXZpZ2F0aW9uIC5OYXZNZW51IHVse21hcmdpbjowO3BhZGRpbmc6MDt9Ci5oZWFkZXItbmF2aWdhdGlvbiAuTmF2TWVudSB1bCBsaXtsaXN0LXN0eWxlLXR5cGU6bm9uZTttYXJnaW46MjBweDt9Ci5oZWFkZXItbmF2aWdhdGlvbiAuTmF2TWVudSB1bCBsaSBhe2NvbG9yOiMzMzM7Zm9udC1zaXplOjE2cHg7Zm9udC13ZWlnaHQ6NjAwO3RleHQtZGVjb3JhdGlvbjpub25lO30KLmhlYWRlci1uYXZpZ2F0aW9uIC5OYXZNZW51IHVsIGxpIGEgc3BhbnttYXJnaW4tbGVmdDo1cHg7Y29sb3I6I2Y5NjkwZTtmb250LXdlaWdodDo2MDA7Zm9udC1zaXplOjEzcHg7Zm9udC1zdHlsZTppdGFsaWM7fQouaGVhZGVyLW5hdmlnYXRpb24gLk5hdk1lbnUgcHtmb250LXNpemU6MTZweDttYXJnaW46MTBweDtjb2xvcjojNjY2NjY2O3RleHQtYWxpZ246Y2VudGVyO30KLmhlYWRlci1uYXZpZ2F0aW9uIC5OYXZNZW51IGF7Zm9udC1zaXplOjE2cHg7Zm9udC13ZWlnaHQ6NjAwO2NvbG9yOiM1YzZhYzQ7fQouaGVhZGVyLW5hdmlnYXRpb24gLk5hdk1lbnUgYTpob3Zlcntmb250LXNpemU6MTZweDtmb250LXdlaWdodDo2MDA7Y29sb3I6IzMzMzMzMzt9Ci5jaGVja3tkaXNwbGF5Om5vbmU7fQouaGVhZGVyLW5hdmlnYXRpb24gbGFiZWx7Y3Vyc29yOnBvaW50ZXI7ZGlzcGxheTpibG9jaztwYWRkaW5nOjA7YmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7dHJhbnNpdGlvbjphbGwgLjVzIGxpbmVhcjt9Ci8qIExBTkRJTkcgKi8KLmxhbmRpbmctc2VjdGlvbntib3gtc2l6aW5nOmJvcmRlci1ib3g7d2lkdGg6MTAwJTtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O3BhZGRpbmc6MTBweDt9Ci5sYW5kaW5nLXdyYXB7Ym94LXNpemluZzpib3JkZXItYm94O21heC13aWR0aDoxMDAwcHg7YmFja2dyb3VuZDojZmZmZmZmO2JvcmRlci1yYWRpdXM6MTBweDtvdmVyZmxvdzpoaWRkZW47cGFkZGluZzowO21hcmdpbjowfQoubGFuZGluZy1zZWN0aW9uLXJvd3tib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwO30KLmxhbmRpbmctc2VjdGlvbi1jb2x7ZmxleDo1MCU7fQoubGFuZGluZzF7Ym94LXNpemluZzpib3JkZXItYm94O3BhZGRpbmc6MjBweDt9Ci5sYW5kaW5nMSBoMntwYWRkaW5nOjA7bWFyZ2luOjA7bWFyZ2luLWJvdHRvbToxMHB4O2xpbmUtaGVpZ2h0OjEuMjtjb2xvcjojNDQ0O2ZvbnQtc2l6ZTozMHB4O2ZvbnQtd2VpZ2h0OjUwMDt9Ci5sYW5kaW5nMSBoMiBzcGFue2NvbG9yOiM0MTY5ZTE7Zm9udC13ZWlnaHQ6ODAwO30KLmNvdW50ZXJ7YmFja2dyb3VuZDojZWZlZmVmO3BhZGRpbmc6MTBweCAyMHB4O21hcmdpbi1ib3R0b206MTBweDtjb2xvcjojZmY1NzMzO2ZvbnQtc2l6ZTozMHB4O2ZvbnQtd2VpZ2h0OjgwMDt9Ci5jb3VudGVyOjphZnRlcntjb250ZW50OicgUGVuZ2d1bmEnO2NvbG9yOiM0MTY5ZTE7Zm9udC1zaXplOjIwcHg7Zm9udC13ZWlnaHQ6NjAwO30KLmxhbmRpbmcxIHB7cGFkZGluZzowO21hcmdpbjowO21hcmdpbi1ib3R0b206MTBweDtjb2xvcjojMzMzMzMzO2ZvbnQtc2l6ZToxNnB4O2ZvbnQtd2VpZ2h0OjUwMDt9Ci5sYW5kaW5nMSAuYnV5e21hcmdpbjoxMHB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtZGVjb3JhdGlvbjpub25lO2JhY2tncm91bmQ6IzQxNjllMTtwYWRkaW5nOjEwcHggMzBweDtjb2xvcjojZmZmZmZmO2ZvbnQtc2l6ZToxNnB4O2ZvbnQtd2VpZ2h0OjUwMDtib3JkZXItcmFkaXVzOjVweDtjdXJzb3I6cG9pbnRlcjt9Ci5sYW5kaW5nMSAuYnV5OmhvdmVye2JhY2tncm91bmQ6I2ZmNTczMzt9Ci5sYW5kaW5nMSAuZnJlZXttYXJnaW46MTBweDtkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWRlY29yYXRpb246bm9uZTtiYWNrZ3JvdW5kOiNmZjU3MzM7cGFkZGluZzoxMHB4IDMwcHg7Y29sb3I6I2ZmZmZmZjtmb250LXNpemU6MTZweDtmb250LXdlaWdodDo1MDA7Ym9yZGVyLXJhZGl1czo1cHg7Y3Vyc29yOnBvaW50ZXI7fQoubGFuZGluZzEgLmZyZWU6aG92ZXJ7YmFja2dyb3VuZDojNDE2OWUxO30KLmxhbmRpbmcye2JveC1zaXppbmc6Ym9yZGVyLWJveDtwYWRkaW5nOjIwcHh9Ci5sYW5kaW5nMiBpbWd7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MTAwJTttYXJnaW4tbGVmdDphdXRvO21hcmdpbi1yaWdodDphdXRvO30KQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3MDBweCl7LmxhbmRpbmctc2VjdGlvbi1jb2x7ZmxleDoxMDAlO21hcmdpbjowO30ubGFuZGluZzEsLmxhbmRpbmcye3BhZGRpbmc6MjBweDt9LmxhbmRpbmcxLC5sYW5kaW5nMnt0ZXh0LWFsaWduOmNlbnRlcjt9fQovKiBUQVJHRVQgKi8KLmJveC1hYm91dHtib3gtc2l6aW5nOmJvcmRlci1ib3g7dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6MTAwJTtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O3BhZGRpbmc6MTBweDt9Ci5hYm91dHtib3gtc2l6aW5nOmJvcmRlci1ib3g7YmFja2dyb3VuZDojZmZmZmZmO3BhZGRpbmc6MTBweDtib3JkZXItcmFkaXVzOjEwcHg7fQouYWJvdXQgaDF7ZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2JvcmRlci1ib3R0b206NHB4IHNvbGlkICM0MTY5ZTE7Zm9udC1zaXplOjIwcHg7Zm9udC13ZWlnaHQ6ODAwO2NvbG9yOiNmZjU3MzM7cGFkZGluZy1ib3R0b206MTBweDttYXJnaW4tdG9wOjQwcHg7fQouYWJvdXQgcHt0ZXh0LWFsaWduOmNlbnRlcjtwYWRkaW5nOjA7bWFyZ2luOjA7Y29sb3I6IzMzMzMzMztmb250LXNpemU6MTZweDt9Ci8qIFNFUlZJQ0VTICovCi5zZXJ2aWNlc3tiYWNrZ3JvdW5kOiNmZmZmZmY7dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luOjEwcHg7Ym9yZGVyLXJhZGl1czoxMHB4O30KLnNlcnZpY2VzIGgxe2Rpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtib3JkZXItYm90dG9tOjRweCBzb2xpZCAjNDE2OWUxO2ZvbnQtc2l6ZToyMHB4O2ZvbnQtd2VpZ2h0OjgwMDtjb2xvcjojZmY1NzMzO3BhZGRpbmctYm90dG9tOjEwcHg7bWFyZ2luLXRvcDo0MHB4O30KLmNlbnttYXgtd2lkdGg6MTAwJTttYXJnaW46YXV0bztkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjt0ZXh0LWFsaWduOmNlbnRlcjtmbGV4LXdyYXA6d3JhcDt9Ci5zZXJ2aWNlLWZsZXh7ZmxleDoyNSU7cGFkZGluZzoxMHB4O21heC13aWR0aDoxMDAlO2JveC1zaXppbmc6Ym9yZGVyLWJveDt9Ci5zZXJ2aWNle2JhY2tncm91bmQ6IzQxNjllMTtib3JkZXItcmFkaXVzOjVweDtwYWRkaW5nOjEwcHg7cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6aGlkZGVuO30KLnNlcnZpY2UgaXtjb2xvcjojZmZmZmZmO2ZvbnQtc2l6ZTozNHB4O21hcmdpbi1ib3R0b206MzBweDt9Ci5zZXJ2aWNlIGgye2NvbG9yOiNmZmZmZmY7Zm9udC1zaXplOjE4cHg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2ZvbnQtd2VpZ2h0OjUwMDttYXJnaW46MDt9Ci5zZXJ2aWNlIHB7Y29sb3I6I2ZmZmZmZjtmb250LXNpemU6MTZweH0KQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjkwMHB4KXsuc2VydmljZS1mbGV4e2ZsZXg6NTAlO319CkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NTBweCl7LnNlcnZpY2UtZmxleHtmbGV4OjEwMCU7fX0KLyogVEFSR0VUICovCi5ib3gtdGFyZ2V0e2JveC1zaXppbmc6Ym9yZGVyLWJveDt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDoxMDAlO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7cGFkZGluZzoxMHB4O30KLnRhcmdldHtib3gtc2l6aW5nOmJvcmRlci1ib3g7YmFja2dyb3VuZDojZmZmZmZmO3BhZGRpbmc6MTBweDtib3JkZXItcmFkaXVzOjEwcHg7fQoudGFyZ2V0IGgxe2Rpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtib3JkZXItYm90dG9tOjRweCBzb2xpZCAjNDE2OWUxO2ZvbnQtc2l6ZToyMHB4O2ZvbnQtd2VpZ2h0OjgwMDtjb2xvcjojZmY1NzMzO3BhZGRpbmctYm90dG9tOjEwcHg7bWFyZ2luLXRvcDo0MHB4O30KLnRhcmdldCBwe3RleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6MDttYXJnaW46MDtjb2xvcjojMzMzMzMzO2ZvbnQtc2l6ZToxNnB4O30KLyogQ09OVEFDVCAqLwouYm94LWNvbnRhY3R7Ym94LXNpemluZzpib3JkZXItYm94O3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOjEwMCU7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtwYWRkaW5nOjEwcHg7fQouY29udGFjdHtib3gtc2l6aW5nOmJvcmRlci1ib3g7YmFja2dyb3VuZDojZmZmZmZmO3BhZGRpbmc6MTBweDtib3JkZXItcmFkaXVzOjEwcHg7fQouY29udGFjdCBoMXtkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7Ym9yZGVyLWJvdHRvbTo0cHggc29saWQgIzQxNjllMTtmb250LXNpemU6MjBweDtmb250LXdlaWdodDo4MDA7Y29sb3I6I2ZmNTczMztwYWRkaW5nLWJvdHRvbToxMHB4O21hcmdpbi10b3A6NDBweDt9Ci5jb250YWN0IHB7dGV4dC1hbGlnbjpjZW50ZXI7cGFkZGluZzowO21hcmdpbjowO2NvbG9yOiMzMzMzMzM7Zm9udC1zaXplOjE2cHg7fQouY29udGFjdCBwIHNwYW57Y29sb3I6IzQxNjllMTt9Ci8qIE9SREVSICovCi5vcmRlci1zZWN0aW9ue2JveC1zaXppbmc6Ym9yZGVyLWJveDt3aWR0aDoxMDAlO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7cGFkZGluZzoxMHB4O30KLmlubmVyLW9yZGVye2JveC1zaXppbmc6Ym9yZGVyLWJveDttYXgtd2lkdGg6MTAwMHB4O2JhY2tncm91bmQ6I2ZmZmZmZjt0ZXh0LWFsaWduOmNlbnRlcjtib3JkZXItcmFkaXVzOjEwcHg7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmc6MDttYXJnaW46MDt9Ci5pbm5lci1vcmRlciBoMXtkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7Ym9yZGVyLWJvdHRvbTo0cHggc29saWQgIzQxNjllMTtmb250LXNpemU6MjBweDtmb250LXdlaWdodDo4MDA7Y29sb3I6I2ZmNTczMztwYWRkaW5nLWJvdHRvbToxMHB4O21hcmdpbi10b3A6NDBweDt9Ci5pbm5lci1vcmRlciBwe3RleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6MDttYXJnaW46MDttYXJnaW4tYm90dG9tOjEwcHg7Y29sb3I6IzMzMzMzMztmb250LXNpemU6MTZweDtmb250LXdlaWdodDo1MDA7fQovKiBGT0xMT1dFUiAqLwouaGFyZ2EtZm9sbG93ZXJ7Ym94LXNpemluZzpib3JkZXItYm94O3dpZHRoOjEwMCU7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtwYWRkaW5nOjEwcHg7fQouaW5uZXItZm9sbG93ZXJ7Ym94LXNpemluZzpib3JkZXItYm94O21heC13aWR0aDoxMDAwcHg7YmFja2dyb3VuZDojZmZmZmZmO3RleHQtYWxpZ246Y2VudGVyO2JvcmRlci1yYWRpdXM6MTBweDtvdmVyZmxvdzpoaWRkZW47cGFkZGluZzowO21hcmdpbjowO30KLmlubmVyLWZvbGxvd2VyIGgxe2Rpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtib3JkZXItYm90dG9tOjRweCBzb2xpZCAjNDE2OWUxO2ZvbnQtc2l6ZToyMHB4O2ZvbnQtd2VpZ2h0OjgwMDtjb2xvcjojZmY1NzMzO3BhZGRpbmctYm90dG9tOjEwcHg7bWFyZ2luLXRvcDo0MHB4O30KLmluZG8tZm9sbG93ZXJ7bWF4LXdpZHRoOjEwMCU7bWFyZ2luOmF1dG87ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7dGV4dC1hbGlnbjpjZW50ZXI7ZmxleC13cmFwOndyYXA7fQouZm9sbG93ZXItZmxleHtmbGV4OjI1JTtwYWRkaW5nOjEwcHg7bWF4LXdpZHRoOjEwMCU7Ym94LXNpemluZzpib3JkZXItYm94O30KLnBvcnQtZm9sbG93ZXJ7YmFja2dyb3VuZDojZmY1NzMzO2JvcmRlci1yYWRpdXM6NXB4O3BhZGRpbmc6MTBweDtwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW47Y29sb3I6I2ZmZmZmZjt9Ci5wb3J0LWZvbGxvd2VyIGgye3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtmb250LXNpemU6MTZweDtjb2xvcjojZmZmZmZmO2ZvbnQtd2VpZ2h0OjgwMDtwYWRkaW5nOjA7bWFyZ2luOjA7fQoucG9ydC1mb2xsb3dlciB1bHttYXJnaW46MDtwYWRkaW5nOjA7fQoucG9ydC1mb2xsb3dlciB1bCBsaXt0ZXh0LWFsaWduOmxlZnQ7cGFkZGluZzowO2NvbG9yOiNmZmZmZmY7Zm9udC1zaXplOjE2cHg7bGlzdC1zdHlsZTpub25lO30KLnBvcnQtZm9sbG93ZXIgdWwgbGkgc3BhbnttYXJnaW4tbGVmdDo1cHg7Zm9udC13ZWlnaHQ6NjAwO2NvbG9yOiNlZmVmZWY7fQpAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTAwcHgpey5mb2xsb3dlci1mbGV4e2ZsZXg6NTAlO319CkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NTBweCl7LmZvbGxvd2VyLWZsZXh7ZmxleDoxMDAlO319Ci8qIEJVVFRPTiAqLwojZmxpcHB5e3RleHQtYWxpZ246Y2VudGVyO21hcmdpbjoxMHB4IGF1dG87d2lkdGg6MTAwJTtkaXNwbGF5OmlubGluZTt9CiNmbGlwcHkgYnV0dG9ue2JhY2tncm91bmQ6IzQxNjllMTtjb2xvcjojZmZmO3BhZGRpbmc6MTBweCAzMHB4O2ZvbnQtd2VpZ2h0OjUwMDtmb250LXNpemU6MTZweDt0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW46MTBweCBhdXRvO2JvcmRlcjpub25lO2JvcmRlci1yYWRpdXM6NXB4O30KI2ZsaXBwYW5lbHtkaXNwbGF5Om5vbmU7cGFkZGluZzowO3RleHQtYWxpZ246bGVmdDtiYWNrZ3JvdW5kOiNmZmY7bWFyZ2luOjA7fQovKiBGT1JNVUxJUiAqLwpmb3JtLndoYXRzYXBwLWZvcm17Ym9yZGVyLXJhZGl1czouNXJlbTtwYWRkaW5nOjIwcHg7Ym94LXNpemluZzpib3JkZXItYm94O2NvbG9yOiM0NDQ7Zm9udC1zaXplOjE0cHg7bGluZS1oZWlnaHQ6MS41O30KLndoYXRzYXBwLWZvcm0gYS5zZW5kX2Zvcm17Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOiM0MTY5ZTE7dGV4dC1kZWNvcmF0aW9uOm5vbmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzoxMHB4IDI1cHg7Ym9yZGVyLXJhZGl1czouM3JlbTtmb250LXdlaWdodDo3MDA7bGV0dGVyLXNwYWNpbmc6LjVweDtmb250LXNpemU6MTZweDt9CiN0ZXh0LWluZm8gc3BhbntkaXNwbGF5OmJsb2NrO3BhZGRpbmc6MTBweCAxNnB4O3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtd2VpZ2h0OjcwMDttYXJnaW46MTZweCAwO2JvcmRlci1yYWRpdXM6LjVyZW07fQojdGV4dC1pbmZvIHNwYW4ueWVze2JhY2tncm91bmQ6I2M2ZmZjNTtjb2xvcjojMGVhOTA0O30KI3RleHQtaW5mbyBzcGFuLm5ve2JhY2tncm91bmQ6I2ZmYzVjNTtjb2xvcjojY2UwNDA0O30KLmRhdGFpbnB1dHtwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW46NXB4IDAgMjBweDt9Ci5kYXRhaW5wdXQgcHtmb250LXNpemU6MTJweDtiYWNrZ3JvdW5kOiNlZWU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzo1cHggMTZweDtib3JkZXItcmFkaXVzOi41cmVtO30KLndoYXRzYXBwLWZvcm0gdGV4dGFyZWF7bWluLWhlaWdodDoxMjBweDt9Ci5kYXRhaW5wdXQgc2VsZWN0e3BhZGRpbmc6MTZweCAwO2ZvbnQtc2l6ZToxNnB4O3dpZHRoOjEwMCU7Ym9yZGVyOjA7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2RkZDtvdXRsaW5lOm5vbmU7YmFja2dyb3VuZDojZmZmO30KLmRhdGFpbnB1dCBpbnB1dCwuZGF0YWlucHV0IHRleHRhcmVhe2ZvbnQtc2l6ZToxNnB4O3BhZGRpbmc6MTZweCAwO2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTtib3JkZXI6bm9uZTtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZGRkO30KLmRhdGFpbnB1dCBpbnB1dDpmb2N1cywuZGF0YWlucHV0IHRleHRhcmVhOmZvY3Vze291dGxpbmU6bm9uZTt9Ci5kYXRhaW5wdXQgbGFiZWx7Y29sb3I6Izk5OTtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo0MDA7cG9zaXRpb246YWJzb2x1dGU7cG9pbnRlci1ldmVudHM6bm9uZTtsZWZ0OjA7dG9wOjE4cHg7dHJhbnNpdGlvbjouMnMgZWFzZSBhbGw7fQouZGF0YWlucHV0IGlucHV0OmZvY3VzfmxhYmVsLC5kYXRhaW5wdXQgaW5wdXQ6dmFsaWR+bGFiZWwsLmRhdGFpbnB1dCB0ZXh0YXJlYTpmb2N1c35sYWJlbCwuZGF0YWlucHV0IHRleHRhcmVhOnZhbGlkfmxhYmVse3RvcDotMTBweDtmb250LXNpemU6MTRweDtjb2xvcjojNDE2OWUxO30KI25vdGlmLWxpY2Vuc2Ugc3Bhbntmb250LXNpemU6NDBweDt9CiNub3RpZi1saWNlbnNle2Rpc3BsYXk6bm9uZTtwb3NpdGlvbjpmaXhlZDt9Ci5iYXJ7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO30KLmJhcjpiZWZvcmUsLmJhcjphZnRlcntjb250ZW50OicnO2hlaWdodDoycHg7d2lkdGg6MDtib3R0b206MXB4O3Bvc2l0aW9uOmFic29sdXRlO2JhY2tncm91bmQ6IzQxNjllMTt0cmFuc2l0aW9uOi4ycyBlYXNlIGFsbDt9Ci5iYXI6YmVmb3Jle2xlZnQ6NTAlO30KLmJhcjphZnRlcntyaWdodDo1MCU7fQouZGF0YWlucHV0IGlucHV0OmZvY3Vzfi5iYXI6YmVmb3JlLC5kYXRhaW5wdXQgaW5wdXQ6Zm9jdXN+LmJhcjphZnRlciwuZGF0YWlucHV0IHRleHRhcmVhOmZvY3Vzfi5iYXI6YmVmb3JlLC5kYXRhaW5wdXQgdGV4dGFyZWE6Zm9jdXN+LmJhcjphZnRlcnt3aWR0aDo1MCU7fQouaW5kaWdveHtiYWNrZ3JvdW5kOiMzZjUxYjU7fQoub3JhbmdleHtiYWNrZ3JvdW5kOiNmZjk4MDA7fQoucGlua3h7YmFja2dyb3VuZDojZTkxZTYzO30KLmJsdWV4e2JhY2tncm91bmQ6IzIxOTZGMzt9Ci5wdXJwbGV4e2JhY2tncm91bmQ6IzljMjdiMDt9Ci5yZWR4e2JhY2tncm91bmQ6I0Y0NDMzNjt9Ci5ncmVlbnh7YmFja2dyb3VuZDojNENBRjUwO30KLmhpZ2hsaWdodHtwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6NTAlO3dpZHRoOjEwMHB4O3RvcDoyNSU7bGVmdDowO3BvaW50ZXItZXZlbnRzOm5vbmU7b3BhY2l0eTouNTt9Ci5kYXRhaW5wdXQgaW5wdXQ6Zm9jdXN+LmhpZ2hsaWdodCwuZGF0YWlucHV0IHRleHRhcmVhOmZvY3Vzfi5oaWdobGlnaHR7YW5pbWF0aW9uOmlucHV0SGlnaGxpZ2h0ZXIgLjNzIGVhc2U7fQouZGF0YWlucHV0IGlucHV0OmZvY3VzfmxhYmVsLC5kYXRhaW5wdXQgaW5wdXQ6dmFsaWR+bGFiZWwsLmRhdGFpbnB1dCB0ZXh0YXJlYTpmb2N1c35sYWJlbCwuZGF0YWlucHV0IHRleHRhcmVhOnZhbGlkfmxhYmVse3RvcDotMTBweDtmb250LXNpemU6MTNweDtjb2xvcjojNDE2OWUxO30KLyogRkFRICovCi5ib3gtZmFxe2JveC1zaXppbmc6Ym9yZGVyLWJveDt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDoxMDAlO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7cGFkZGluZzoxMHB4O30KLmZhcXtib3gtc2l6aW5nOmJvcmRlci1ib3g7YmFja2dyb3VuZDojZmZmZmZmO3BhZGRpbmc6MTBweDtib3JkZXItcmFkaXVzOjEwcHg7fQouZmFxIGgxe2Rpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtib3JkZXItYm90dG9tOjRweCBzb2xpZCAjNDE2OWUxO2ZvbnQtc2l6ZToyMHB4O2ZvbnQtd2VpZ2h0OjgwMDtjb2xvcjojZmY1NzMzO3BhZGRpbmctYm90dG9tOjEwcHg7bWFyZ2luLXRvcDo0MHB4O30KLnF1ZXN0aW9uLXdyYXB7YmFja2dyb3VuZDojNDE2OWUxO2NvbG9yOiNmZmZmZmY7bWFyZ2luLWJvdHRvbToxMHB4O2JvcmRlci1yYWRpdXM6NXB4O30KLnF1ZXN0aW9uLXdyYXAtaGVhZGVye3BhZGRpbmc6MTBweCAzMHB4IDEwcHg7Zm9udC13ZWlnaHQ6NTAwO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7cG9zaXRpb246cmVsYXRpdmU7Y3Vyc29yOnBvaW50ZXI7fQoucXVlc3Rpb24td3JhcC1oZWFkZXI6OmFmdGVyIHtjb250ZW50OiJcMDAyQiI7Zm9udC1zaXplOiAycmVtO3Bvc2l0aW9uOiBhYnNvbHV0ZTtyaWdodDogMXJlbTt9Ci5xdWVzdGlvbi13cmFwLWhlYWRlci5hY3RpdmU6OmFmdGVyIHtjb250ZW50OiAiXDIyMTIiO30KLmFuc3dlci13cmFwIHttYXgtaGVpZ2h0OjA7b3ZlcmZsb3c6IGhpZGRlbjt0cmFuc2l0aW9uOm1heC1oZWlnaHQgMC4ycyBlYXNlLW91dDt9Ci5hbnN3ZXItd3JhcC1jb250ZW50e3BhZGRpbmc6MTBweDtsaW5lLWhlaWdodDogMS41cmVtO2NvbG9yOiMzMzMzMzM7Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmZmZmY7YmFja2dyb3VuZDojZWZlZmVmO30KLyogRk9PVEVSICovCiNmb290ZXItY29udGFpbmVye2JhY2tncm91bmQ6IzExMTtwYWRkaW5nOjEwcHggMjBweDtvdmVyZmxvdzpoaWRkZW47fQojZm9vdGVyLXdyYXBwZXJ7bWF4LXdpZHRoOjEwMDBweDttYXJnaW46MCBhdXRvO292ZXJmbG93OmhpZGRlbjtjb2xvcjojY2NjO2ZvbnQtc2l6ZToxNnB4O3RleHQtYWxpZ246Y2VudGVyO30KI2Zvb3Rlci13cmFwcGVyIGF7Y29sb3I6I2ZmNTczMzttYXJnaW4tcmlnaHQ6MTZweDtsaW5lLWhlaWdodDoxOHB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO30KI2Zvb3Rlci13cmFwcGVyIGE6aG92ZXJ7Y29sb3I6I2ZmNTczMzt9")
