3¢ API Examples
===============

This repo shows how to use the 3¢ API in various languages. Feel free to fork it
and add examples. We'd love to merge some pull requests!

How to Use the 3¢ API
---------------------

Before you can submit feedback from your app, you need a key. Provide this key
when submitting feedback so we can look up the email address to send it to. To
get a key, make a ``GET`` request to
``http://threecents.elevenbasetwo.com/api/emails/<email-address>/key``.

For instance, to get a key for the email address ``eric@example.com`` you could
use ``curl``::

    $ curl http://threecents.elevenbasetwo.com/api/emails/eric@example.com/key
    208eb5ed1aed5f8111d023bf718ba3ff

If ``eric@example.com`` hasn't been submitted before, we'll add it to our
database.

With your key in hand, you can now submit feedback. Make a POST request to
``http://threecents.elevenbasetwo.com/api/feedback/<key>``. The body of the
request should be a JSON object with the key "feedback". For instance,

::

    {"feedback": "It's the best thing I've ever seen!"}

If you put that in the file ``postdata.json``, you can submit it with ``curl``::

    $ curl -X POST http://threecents.elevenbasetwo.com/api/feedback/208eb5ed1aed5f8111d023bf718ba3ff -d@./postdata.json

We use Mailgun_ for sending emails, so you should have feedback in your email
inbox within a minute after submitting it to the API.

That's all there is to it! Sweet, simple, and to the point.

.. _Mailgun: https://mailgun.net/

threecents.js
-------------

``threecents.js`` is a little different than the other examples. It's intended
to be included on a web page::

    <script id=threecents src=http://threecents.elevenbasetwo.com/cdn/threecents.js data-key=208eb5ed1aed5f8111d023bf718ba3ff></script>

``threecents.js`` will add a form with a textarea and a submit button
immediately after the script tag, so put it where you'd like the form to appear.
When the submit button is clicked, the content of the text box will be sent as
feedback using the key specified with the ``data-key`` attribute.

The form has no styling, so it's up to you to make it look how you want.
