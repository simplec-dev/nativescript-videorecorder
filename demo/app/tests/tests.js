var Videorecorder = require("nativescript-videorecorder-x").VideoRecorder;
var videorecorder = new VideoRecorder();

describe("greet function", function() {
    it("exists", function() {
        expect(videorecorder.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(videorecorder.greet()).toEqual("Hello, NS");
    });
});