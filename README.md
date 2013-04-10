# OttawaJS streams talk

## Slide Deck
See the gh-pages branch for the slides,
or [online here](http://daniel-lauzon.com/ottawajs-streams/).

        Readable - digit-stream
        use it (01-read.js)
        run it : node 01-read.js

        use in a pipe
        node 02-pipe.js

        Writeable - green-stream        
        node 03-write.js
        cat green-stream.js |node 03-write.js

        04-pipe green digits
        node 04-pipe.js

        transform
        node 05-backpressure.js

# References

* [DailyJS intro](http://dailyjs.com/2012/12/21/components-holler-gruntstart/)
* [Node.js blog announcement](http://blog.nodejs.org/2012/12/21/streams2/)
* [substack / stream-handbook](https://github.com/substack/stream-handbook)