# How to contribute to Collate4me?

## Chat with us

Do you want to ask us some questions? Do you want to discuss with us?
Don’t hesitate to [join us on gitter][chat-link]!


## Report a bug

You found a bug? Don’t panic, here are some steps to report it easily:

1. Search for it on [the bug tracker][bug-tracker] (don’t forget to use the search bar).
2. If you find a similar bug, don’t hesitate to post a comment to add more importance to the related ticket.
3. If you didn’t find it, [open a new ticket][new-ticket].

If you have to create a new ticket, try to apply the following advices:

- Give an explicit title to the ticket so it will be easier to find it later.
- Be as exhaustive as possible in the description: what did you do? What is the bug? What are the steps to reproduce the bug?
- We also need some information:
    + Your Collate4me version
    + Your server configuration: type of hosting, Nodejs version
    + Your storage system (NeDb, MongoDb)
    + If possible, the related logs

## Fix a bug

Did you want to fix a bug? To keep a great coordination between collaborators, you will have to follow these indications:

1. Be sure the bug is associated to a ticket and say you work on it.
2. [Fork this project repository][fork-repo].
3. [Create a new branch][create-branch]. The name of the branch must be explicit and being prefixed by the related ticket id. For instance, `14_contributing_file` to fix [ticket #14][ticket-14].
4. Make your changes to your fork and [send a pull request][pull-request] on the **dev branch**.


**Tip:** if you are searching for bugs easy to fix, have a look at the « [Good first issue][good-first-issue] » and/or « [Help wanted][help-wanted] » ticket labels.

## Submit an idea

You have great ideas, yes! Don't be shy and open [a new ticket][new-ticket] on our bug tracker to ask if we can implement it. The greatest ideas often come from the shyest suggestions!

If your idea is nice, we’ll have a look at it.

## Contribute to internationalization (i18n)

If you want to improve internationalization, please open a new ticket first and follow indications from « Fix a bug » section.

Translations are present in the subdirectories of `./app/i18n/`.

We are working on a better way to handle internationalization but don’t hesitate to suggest any idea!

## Contribute to documentation

The documentation always needs improvements in order to be more useful to newcomers. If you want to give some help, meet us on [the dedicated sub-folder][docs]!

[chat-link]: https://gitter.im/collate-for-me/Lobby
[bug-tracker]: https://github.com/mehtankush/collate-for-me/issues
[new-ticket]: https://github.com/mehtankush/collate-for-me/issues/new
[fork-repo]: https://help.github.com/articles/fork-a-repo/
[create-branch]: https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/
[ticket-14]: (https://github.com/mehtankush/collate-for-me/issues/14)
[pull-request]: https://help.github.com/articles/using-pull-requests/
[good-first-issue]: https://github.com/mehtankush/collate-for-me/issues?q=label%3A%22good+first+issue+%3Ababy%3A%22
[help-wanted]: https://github.com/mehtankush/collate-for-me/issues?q=label%3A%22help+wanted+%3Aoctocat%3A%22
[docs]: https://github.com/mehtankush/collate-for-me/tree/master/docs