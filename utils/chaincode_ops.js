'use strict';
/*******************************************************************************
 * Copyright (c) 2015 IBM Corp.
 *
 * All rights reserved.
 *
 * This module provides wrappers for the operations on chaincode that this demo
 * needs to perform.
 *
 * Contributors:
 *   Dale Avery - Initial implementation
 *
 * Created by davery on 11/8/2016.
 *******************************************************************************/

// For logging
var TAG = 'chaincode_ops:';

var async = require('async');

var debug = true;  

/**
 * A helper object for interacting with the commercial paper chaincode.  Has functions for all of the query and invoke
 * functions that are present in the chaincode.
 * @param chain A configured hfc chain object.
 * @param chaincodeID The ID returned in the deploy request for this chaincode.
 * @constructor
 */
function CPChaincode(chain, chaincodeID) {
    if (!(chain && chaincodeID))
        throw new Error('Cannot create chaincode helper without both a chain object and the chaincode ID!');
    this.chain = chain;
    this.chaincodeID = chaincodeID;

    // Add an optional queue for processing chaincode related tasks.  Prevents "timer start called twice" errors from
    // the SDK by only processing one request at a time.
    this.queue = async.queue(function (task, callback) {
        task(callback);
    }, 1);
}
module.exports.CPChaincode = CPChaincode;

CPChaincode.prototype.discoverRP = function (uid, inputArgs, cb) {
    console.log(TAG, '- discoverRP uid: ', uid);
    console.log(TAG, '- discoverRP input args: ', JSON.stringify(inputArgs));
    var discoverRP = {
        chaincodeID: this.chaincodeID,
        fcn: 'discoverRP',
        args: inputArgs
    };

    invoke(this.chain, uid, discoverRP, function (err, result) {
        if (err) {
            console.error(TAG, 'failed discoverRP:', err);
            return cb(err);
        }

        console.log(TAG, 'discoverRP successfully:', JSON.stringify(result));
        cb(null, result);
    });
}

CPChaincode.prototype.queryMSISDN = function (enrollID, inputArgs, cb) {
    console.log(TAG, 'queryMSISDN - chaincode_ops:', enrollID);

    var queryMSISDN = {
        chaincodeID: this.chaincodeID,
        fcn: 'queryMSISDN',
        args: inputArgs
    };

    query(this.chain, enrollID, queryMSISDN, function (err, qResponse) {
        if (err) {
            console.error(TAG, 'failed to get queryMSISDN:', err);
            return cb(err);
        }

        console.log(TAG, 'retrieved queryMSISDN information:', qResponse.toString());
        cb(null, qResponse.toString());
    });
};

CPChaincode.prototype.enterData = function (uid, inputArgs, cb) {
    console.log(TAG, '- enterData uid: ', uid);
    console.log(TAG, '- enterData input args: ', JSON.stringify(inputArgs));
    var enterData = {
        chaincodeID: this.chaincodeID,
        fcn: 'enterData',
        args: inputArgs
    };

    invoke(this.chain, uid, enterData, function (err, result) {
        if (err) {
            console.error(TAG, 'failed enterData:', err);
            return cb(err);
        }

        console.log(TAG, 'enterData successfully:', JSON.stringify(result));
        cb(null, result);
    });
};


CPChaincode.prototype.authentication = function (uid, inputArgs, cb) {
    console.log(TAG, '- authentication uid: ', uid);
    console.log(TAG, '- authentication input args: ', JSON.stringify(inputArgs));
    var authentication = {
        chaincodeID: this.chaincodeID,
        fcn: 'authentication',
        args: inputArgs
    };

    invoke(this.chain, uid, authentication, function (err, result) {
        if (err) {
            console.error(TAG, 'failed authentication:', err);
            return cb(err);
        }

        console.log(TAG, 'authentication successfully:', JSON.stringify(result));
        cb(null, result);
    });
};



CPChaincode.prototype.updateRates = function (uid, inputArgs, cb) {
    console.log(TAG, '- updateRates uid: ', uid);
    console.log(TAG, '- updateRates input args: ', JSON.stringify(inputArgs));
    var updateRates = {
        chaincodeID: this.chaincodeID,
        fcn: 'updateRates',
        args: inputArgs
    };

    invoke(this.chain, uid, updateRates, function (err, result) {
        if (err) {
            console.error(TAG, 'failed updateRates:', err);
            return cb(err);
        }

        console.log(TAG, 'updateRates successfully:', JSON.stringify(result));
        cb(null, result);
    });
};

CPChaincode.prototype.CallOut = function (uid, inputArgs, cb) {
    console.log(TAG, '- CallOut uid: ', uid);
    console.log(TAG, '- CallOut input args: ', JSON.stringify(inputArgs));
    var CallOut = {
        chaincodeID: this.chaincodeID,
        fcn: 'CallOut',
        args: inputArgs
    };

    invoke(this.chain, uid, CallOut, function (err, result) {
        if (err) {
            console.error(TAG, 'failed CallOut:', err);
            return cb(err);
        }

        console.log(TAG, 'CallOut successfully:', JSON.stringify(result));
        cb(null, result);
    });
};

CPChaincode.prototype.CallEnd = function (uid, inputArgs, cb) {
    console.log(TAG, '- CallEnd uid: ', uid);
    console.log(TAG, '- CallEnd input args: ', JSON.stringify(inputArgs));
    var CallEnd = {
        chaincodeID: this.chaincodeID,
        fcn: 'CallEnd',
        args: inputArgs
    };

    invoke(this.chain, uid, CallEnd, function (err, result) {
        if (err) {
            console.error(TAG, 'failed CallEnd:', err);
            return cb(err);
        }

        console.log(TAG, 'CallEnd successfully:', JSON.stringify(result));
        cb(null, result);
    });
};


CPChaincode.prototype.CallPay = function (uid, inputArgs, cb) {
    console.log(TAG, '- CallPay uid: ', uid);
    console.log(TAG, '- CallPay input args: ', JSON.stringify(inputArgs));
    var CallPay = {
        chaincodeID: this.chaincodeID,
        fcn: 'CallPay',
        args: inputArgs
    };

    invoke(this.chain, uid, CallPay, function (err, result) {
        if (err) {
            console.error(TAG, 'failed CallPay:', err);
            return cb(err);
        }

        console.log(TAG, 'CallPay successfully:', JSON.stringify(result));
        cb(null, result);
    });
};


CPChaincode.prototype.Overage = function (uid, inputArgs, cb) {
    console.log(TAG, '- Overage uid: ', uid);
    console.log(TAG, '- Overage input args: ', JSON.stringify(inputArgs));
    var Overage = {
        chaincodeID: this.chaincodeID,
        fcn: 'Overage',
        args: inputArgs
    };

    invoke(this.chain, uid, Overage, function (err, result) {
        if (err) {
            console.error(TAG, 'failed Overage:', err);
            return cb(err);
        }

        console.log(TAG, 'Overage successfully:', JSON.stringify(result));
        cb(null, result);
    });
};

CPChaincode.prototype.resetInventory = function (uid, inputArgs, cb) {
    console.log(TAG, '- resetInventory uid: ', uid);
    console.log(TAG, '- resetInventory input args: ', JSON.stringify(inputArgs));
    var resetInventory = {
        chaincodeID: this.chaincodeID,
        fcn: 'resetInventory',
        args: inputArgs
    };

    invoke(this.chain, uid, resetInventory, function (err, result) {
        if (err) {
            console.error(TAG, 'failed resetInventory:', err);
            return cb(err);
        }

        console.log(TAG, 'resetInventory successfully:', JSON.stringify(result));
        cb(null, result);
    });
};

/**
 * Query the chaincode for the full list of commercial papers.
 * @param enrollID The user that the query should be submitted through.
 * @param cb A callback of the form: function(error, commercial_papers)
 */
CPChaincode.prototype.getBlockchainRecord = function (enrollID, recordKey, cb) {
    console.log(TAG, 'getting commercial papers');

    // Accounts will be named after the enrolled users
    var getPapersRequest = {
        chaincodeID: this.chaincodeID,
        fcn: 'getBlockchainRecord',
        args: [recordKey]
    };

    query(this.chain, enrollID, getPapersRequest, function (err, papers) {

        if (err) {
            console.error(TAG, 'failed to getPapers:', err);
            return cb(err);
        }

        console.log(TAG, 'got papers');
        cb(null, papers.toString());
    });
};




/**
 * Helper function for invoking chaincode using the hfc SDK.
 * @param chain A hfc chain object representing our network.
 * @param enrollID The enrollID for the user we should use to submit the invoke request.
 * @param requestBody A valid hfc invoke request object.
 * @param cb A callback of the form: function(error, invoke_result)
 */
function invoke(chain, enrollID, requestBody, cb) {

    doInvoke(chain, enrollID, requestBody, function (err, result) {
        if (err) {
            console.error(TAG, '1st try - failed invoke:', err);
            doInvoke(chain, enrollID, requestBody, function (err2, result2) {
                if (err2) {
                    console.error(TAG, '2nd try - failed invoke:', err2);
                    return cb(err2);
                }

                //console.log(TAG, 'releaseInventory successfully:', result.toString());
                if (debug) console.log(TAG, '2nd try - invoke successfully:', JSON.stringify(result2));
                cb(null, result2);
            });
        } else {

            //console.log(TAG, 'releaseInventory successfully:', result.toString());
            if (debug) console.log(TAG, '1st try - invoke successfully:', JSON.stringify(result));
            cb(null, result);
        }
    });
}

/**
 * Helper function for invoking chaincode using the hfc SDK.
 * @param chain A hfc chain object representing our network.
 * @param enrollID The enrollID for the user we should use to submit the invoke request.
 * @param requestBody A valid hfc invoke request object.
 * @param cb A callback of the form: function(error, invoke_result)
 */
function doInvoke(chain, enrollID, requestBody, cb) {

    // Submit the invoke transaction as the given user
    if (debug) console.log(TAG, 'Invoke transaction as:', enrollID);
    chain.getMember(enrollID, function (getMemberError, usr) {
        if (getMemberError) {
            if (debug) console.error(TAG, 'failed to get ' + enrollID + ' member:', getMemberError.message);
            if (cb) cb(getMemberError);
        } else {
            if (debug) console.log(TAG, 'successfully got member:', enrollID);

            if (debug) console.log(TAG, 'invoke body:', JSON.stringify(requestBody));
            var invokeTx = usr.invoke(requestBody);

            // Print the invoke results
            invokeTx.on('completed', function (results) {
                // Invoke transaction submitted successfully
                if (debug) console.log(TAG, 'Successfully completed invoke. Results:', results);
                cb(null, results);
            });
            invokeTx.on('submitted', function (results) {
                // Invoke transaction submitted successfully
                if (debug) console.log(TAG, 'invoke submitted');
                cb(null, results);
            });
            invokeTx.on('error', function (err) {
                // Invoke transaction submission failed
                console.log(TAG, 'invoke failed. Error:', err);
                cb(err);
            });
        }
    });
}

/**
 * Helper function for querying chaincode using the hfc SDK.
 * @param chain A hfc chain object representing our network.
 * @param enrollID The enrollID for the user we should use to submit the query request.
 * @param requestBody A valid hfc query request object.
 * @param cb A callback of the form: function(error, queried_data)
 */
function query(chain, enrollID, requestBody, cb) {
    doQuery(chain, enrollID, requestBody, function (err, qResponse) {
        if (err) {
            console.error(TAG, '1st try - failed to get query data:', err);
            doQuery(chain, enrollID, requestBody, function (err2, qResponse2) {
                if (err2) {
                    console.error(TAG, '2nd try - failed to get query data:', err2);
                    return cb(err2);
                }

                if (debug) console.log(TAG, '2nd try - retrieved query data:', qResponse2.toString());
                cb(null, qResponse2.toString());
            });
        } else {

            if (debug) console.log(TAG, '1st try - retrieved query data:', qResponse.toString());
            cb(null, qResponse.toString());
        }
    });
}

/**
 * Helper function for querying chaincode using the hfc SDK.
 * @param chain A hfc chain object representing our network.
 * @param enrollID The enrollID for the user we should use to submit the query request.
 * @param requestBody A valid hfc query request object.
 * @param cb A callback of the form: function(error, queried_data)
 */
function doQuery(chain, enrollID, requestBody, cb) {
    // Submit the invoke transaction as the given user
    if (debug) console.log(TAG, 'querying chaincode as:', enrollID);
    chain.getMember(enrollID, function (getMemberError, usr) {
        if (getMemberError) {
            console.error(TAG, 'failed to get ' + enrollID + ' member:', getMemberError.message);
            if (cb) cb(getMemberError);
        } else {
            if (debug) console.log(TAG, 'successfully got member:', enrollID);

            if (debug) console.log(TAG, 'query body:', JSON.stringify(requestBody));
            var queryTx = usr.query(requestBody);

            queryTx.on('complete', function (results) {
                if (debug) console.log(TAG, 'Successfully completed query. Results:', results);
                cb(null, results.result);
            });
            queryTx.on('error', function (err) {
                console.log(TAG, 'query failed. Error:', err);
                cb(err);
            });
        }
    });
}