Threecents API Examples
=======================

This repo shows how to use the 3¢ API in various languages. Feel free to fork it
and add an example in your favorite language. We'd love merge some pull
requests!

The Docs
--------

Before you can submit feedback from your app, you need a public key. This key
must be provided when submitting feedback so we can look up the email address to
send it to. To get the key, make a ``GET`` request to
``http://threecents.elevenbasetwo.com/api/emails/<email-address>/key``.

To get a key for the email address ``eric@example.com`` you could use the
following ``curl`` request::

    $ curl -X POST http://threecents.elevenbasetwo.com/api/emails/eric@example.com/key
    208eb5ed1aed5f8111d023bf718ba3ff

If ``eric@example.com`` hasn't been submitted before, we'll add it to our
database with a new public key.

With your key in hand, you can now submit feedback via the API. Make a POST
request to ``http://threecents.elevenbasetwo.com/api/feedback/<public-key>``.
The body of the request should be a JSON object with the key "feedback".

Here's what the data should look like::

    {"feedback": "It's the best thing I've ever seen!"}

If you put that in a file called ``postdata.json``, you can submit it using ``curl`` with the command

::

    $ curl -X POST http://threecents.elevenbasetwo.com/api/feedback/208eb5ed1aed5f8111d023bf718ba3ff -d@./postdata.json

We use Mailgun_ for sending emails, and they deliver pretty fast, so you should
have feedback in your email inbox within a minute after submitting it to the
API.

That's all there is to it! Sweet, simple, and to the point.

.. _Mailgun: https://mailgun.net/
