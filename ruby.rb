# Getting a key is simple
require "net/http"

# Make a request object
key_request = Net::HTTP::Post.new("/api/emails/joe@example.com/key") 
# And submit it
response = Net::HTTP.new("threecents.elevenbasetwo.com", 80).start {|http| http.request(key_request)}

key = response.body
puts key


# Submitting feedback is basically the same, but with one more step
require "net/http"
require "rubygems"
require "json"

# Make a request object
feedback_request = Net::HTTP::Post.new("/api/feedback/#{key}")
# Add your feedback (you can also manually generate the json string, but really, who has the time?)
feedback_request.body = {"feedback" => "It's the best thing I've ever seen!"}.to_json
# And submit it
response = Net::HTTP.new("threecents.elevenbasetwo.com", 80).start {|http| http.request(feedback_request)}

puts "Feedback Submitted!" if response.code == "200"
