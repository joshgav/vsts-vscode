/*---------------------------------------------------------------------------------------------
*  Copyright (c) Microsoft Corporation. All rights reserved.
*  Licensed under the MIT License. See License.txt in the project root for license information.
*--------------------------------------------------------------------------------------------*/
"use strict";

import { GitVcService }  from "../../src/services/gitvc";

var chai = require("chai");
/* tslint:disable:no-unused-variable */
var expect = chai.expect;
/* tslint:enable:no-unused-variable */
var assert = chai.assert;
chai.should();

describe("GitVcService", function() {

    beforeEach(function() {
        //
    });

    it("should verify GetCreatePullRequestUrl", function() {
        let url: string = "https://account.visualstudio.com/DefaultCollection/project";
        let branch: string = "branch";

        assert.equal(GitVcService.GetCreatePullRequestUrl(url, branch), url + "/pullrequests#_a=createnew&sourceRef=" + branch);
    });

    it("should verify GetFileBlameUrl", function() {
        let url: string = "https://account.visualstudio.com/DefaultCollection/project";
        let file: string = "team-extension.ts";
        let branch: string = "branch";

        assert.equal(GitVcService.GetFileBlameUrl(url, file, branch), url + "#path=" + file + "&version=GB" + branch + "&annotate=true");
    });

    it("should verify GetFileHistoryUrl", function() {
        let url: string = "https://account.visualstudio.com/DefaultCollection/project";
        let file: string = "team-extension.ts";
        let branch: string = "branch";

        assert.equal(GitVcService.GetFileHistoryUrl(url, file, branch), url + "#path=" + file + "&version=GB" + branch + "&_a=history");
    });

    it("should verify GetPullRequestDiscussionUrl", function() {
        let repositoryUrl: string = "https://account.visualstudio.com/DefaultCollection/_git/project";
        let id: string = "42";

        assert.equal(GitVcService.GetPullRequestDiscussionUrl(repositoryUrl, id), repositoryUrl + "/pullrequest/" + id + "?view=discussion");
    });

    it("should verify GetPullRequestsUrl", function() {
        let repositoryUrl: string = "https://account.visualstudio.com/DefaultCollection/_git/project";

        assert.equal(GitVcService.GetPullRequestsUrl(repositoryUrl), repositoryUrl + "/pullrequests");
    });

    it("should verify GetPullRequestDiscussionUrl", function() {
        let repositoryUrl: string = "https://account.visualstudio.com/DefaultCollection/_git/project";
        let branch: string = "branch";

        assert.equal(GitVcService.GetRepositoryHistoryUrl(repositoryUrl, branch), repositoryUrl + "/history" + "?itemVersion=GB" + branch + "&_a=history");
    });

});
