is there a way to get the website address? (the first part of url before the first /) it is a useful metadata

i think there was more custom text at the beginning of development of this extension than it is now. is it my memory or really there is less option now?

FWIW: I’m on a Mac and I discovered this wonderful Firefox add-on. I too noticed that it would only save to the Downloads folder. I made a soft link from my bookmarks folder in my vault to a “bookmarks” folder inside the ~/Downloads folder. Works perfectly fine.

Every time I make a soft link I always `cd` to where I wish it to be, to avoid typing out long location strings multiple times (risk for typos). As the format is “`ln -s [full-path-to-original-folder/file] [location-of-link]`” I only need to end the command with the name for the file folder at the location of the copy, and I don’t mix up if the original or link comes first/last.

So, in a terminal (iTerm2 in my case) window I did:

```
cd ~/Downloads 
ln -s /Users/mathiashellquist/git/resources/bookmarks/ bookmarks
```

Job done. Works great. As I sync my vaults via Git I don’t have to care about the ~/Downloads folder, which is where the symbolic link lives, syncing or not. I will only be syncing “real” files via Git to all my devices, and the path within the vault is the same on all my used platforms (macOS, Linux, Win, iOS).

PS. As I was scrolling this thread today when I found it, my take on Chrome is that it should be avoided at all cost. [It is basically spyware 12](https://www.sciencealert.com/a-tech-expert-says-we-should-stop-using-google-chrome). If you care about Privacy in the slightest, and you should, you shouldn’t use Chrome. There are also good Blink (Chromes “rendering engine”) based alternatives out there, that doesn’t collect all your personal details. There is no need to hand over all your personal details to Google these days. IMHO. ![:slight_smile:](https://forum.obsidian.md/images/emoji/apple/slight_smile.png?v=10 ":slight_smile:")

You can clean up any similarly named tags using the rename function of tag wrangler plugin!

I love the markdownload metadata extraction. But have 2 questions.

1.  I usually don’t want to extract the body of the website / article. Is there an option to by default NOT load the webpage body, but only the metadata.
    
2.  With Open Graph formatting, I want to copy the {og:image} or {og:type} . Is this possible? I can’t get it to work.
    

Thanks!

after the recent update i cant download images, not touched the setting

It’s easy to automate the moving of the clipped files into an Obsidian vault.

1.  ![:warning:](https://forum.obsidian.md/images/emoji/apple/warning.png?v=12 ":warning:") Important! Change the default `~/Downloads` in the plugin settings to something like `WebClips`.
2.  Open the console and create a symbolic link from your vault to that location in `~/Downloads`:  
    For Linux and MacOS it is `ln -s /home/tripleight/Obsidian/tripleight/Inbox ~/Downloads/WebClips`  
    For Windows, it will be: `mklink /D C:\Obsidian/tripleight/Inbox C:\Downloads\WebClips`  
    Where `Inbox` is a folder in your vault where you will find your clipped files.

![:warning:](https://forum.obsidian.md/images/emoji/apple/warning.png?v=12 ":warning:") DO NOT make a link to your default Downloads folder, it will be painful.

Now I’m looking for a way not to have the images alongside the .md file - it’s a lot of clutter in the tree.

As [@Archie](https://forum.obsidian.md/u/archie) suggested in [MarkDownload - Markdown Web Clipper - #70 by Archie](https://forum.obsidian.md/t/markdownload-markdown-web-clipper/173/70)  
It’s worth storing them in a separate dir elsewhere in Vault and linking to that dir from every new clipped .md file.  
So far I came up with  
![image](https://forum.obsidian.md/uploads/default/original/3X/6/c/6cf8f249bfd6da0016c53d4f3a20f0020c0fa35a.png)  
![image](https://forum.obsidian.md/uploads/default/original/3X/c/0/c044d5997200ca9131598752f5b4c3c92ec679fc.png)

But I’d want to have a separate `/image` dir in my vault so the images would be stored there with a `/{pageTitle}/` prefix. This will both help decluttering the tree and easily remove the dangling images.

Ok, now you are just messing with me:

![image](https://forum.obsidian.md/uploads/default/original/3X/3/7/37425d413bc358868ee0ae310ff6f14a662530bd.png)

How is this even possible?

Heyho, thanks for this great plugin!! I use it literally everyday. :))

I have a feature request which would be insanely useful for wikipedia links. I always struggled with, how wikipedia articles are cluttered with citation links. It is a real pain to clean them up.  
Until I stumbled across this website: [https://wikipedia.thetimetube.com/ 22](https://wikipedia.thetimetube.com/)  
it basically provides you with a cleaned article, ready to download as pdf.  
UNFORTUNATELY it won’t woirk with markdwonloader. Which is just a minor setback, I just can copy and paste. But it would quadruple my speed if your extension would work with that website. ![:slight_smile:](https://forum.obsidian.md/images/emoji/apple/slight_smile.png?v=12 ":slight_smile:")

Cheers!

Hello, thanks for the great plugin. I’ve saw that this plugin remove obsidian uri for sending content to obsidian.

I’m adding feature for markdownload to able sending clipboard to obsidian. This is the feature:

-   Send selection to New file in obsidian
-   Send tab to new file in obsidian
-   Bypass URI character limit

[![IMG_20220821_205811_059](https://forum.obsidian.md/uploads/default/optimized/3X/7/2/7263c66603640a0df3ccd8c7c5c3c926f5168242_2_690x335.jpeg)](https://forum.obsidian.md/uploads/default/original/3X/7/2/7263c66603640a0df3ccd8c7c5c3c926f5168242.jpeg "IMG_20220821_205811_059")

Currently it’s still in my branch and need to tested and merged by [@death.au](https://forum.obsidian.md/u/death.au). Hopefully it’s acceptable.

PR link:

Thanks,

After I select “Always show Save As dialog,” nothing happens when I click “download” in Firefox for Mac.

Yes to this, not just because it would prevent mistakes, but because writing the whole tags for each clip ends up taking a lot of time. Now I just save clips to tag later in Obsidian with autocompletion, but of course they keep piling up.

Sorry to insist, but do any of you run into this “problem”? how do you deal with it?. I do this:

-   I edited the template and included two tags: “#webclip/article” and “#webclip/video”, then delete one when I clip something.
    
-   It’s a start, but I have to add the rest of the tags later when (and _if_) I have time to review all I’ve clipped, then it is more time consuming because the content of the clip isn’t fresh in my brain and I have to go over it again
    
-   If I don’t remember to tag them later, a lot of clips get lost in the clutter
    
-   To me, the ideal scenario would be having a list of tags deployed in an outline (like the Tag Pane does) and just click the tags I want when I’m clipping. That’d be fast and effortless (for me, not for the developer, sorry!). Could this even be possible?
    
-   Tag auto-completion would be the second best solution
    
-   Copying all my tags to the template and deleting the wrong ones would be just silly
    

Anyway, I love this extension to no end, thanks a lot to death.au and Enrico. You deserve Fortune and Glory, guys, Fortune and Glory.

hey can you share that pugin.  
**It’s a nice plugin to have**. the plugin will search for specific folders and import the md files into obsidian folder specified.

Your desired functionality sounds like Evernote’s, though Evernote’s tag-while-clipping (my name for it) is tedious to use if you’ve created a lot of tags. The send-to-Evernote (their term) email feature also doesn’t let you browser your tags. You just add them to the subject line, along with a destination folder. I agree it would be great to select from your own tag set when clipping. Not sure how that could be realized.

Once I realized I’d failed to ENABLE the prerequisite plugin, it works! Great clipper. Thanks.

Fantastic extension. It has changed the way I take notes.  
Thanks

If I can suggest a feature, the possibility of saving more text selections in the same markdown note file.  
I don’t know if possible, but could make it perfect.

I don’t really need in my worklow (I prefer saving the entire web article in my vault and post-process the text in Obsidian), but many other users usually take multiple web clips from the same article, they would prefer having all in the same note.

Read a thread a while ago that someone was developing this as an extension for Safari in ios. Anyone know if that happened? The Kagi browser can use firefox and chrome extensions on ios, but last I tried it wasn’t working with Markdownload.

Hey [@death.au](https://forum.obsidian.md/u/death.au), is it possible to directly save the webpage into an obsidian folder?

I’ve set the rlevant Obsidian folders in the extension options and downloaded and enabled Obsidian Advanced URI but nothing is happening…

I’m on Edge