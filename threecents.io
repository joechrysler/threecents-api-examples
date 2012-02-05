// Show the key
keyUrl := "http://threecents.elevenbasetwo.com/api/emails/eric@example.com/key"
key := URL with(keyUrl) fetch

// Submit some feedback
feedbackUrl := "http://threecents.elevenbasetwo.com/api/feedback/#{key}" interpolate
URL with(feedbackUrl) post("{\"feedback\": \"It's the best thing I've ever seen!\"}")
