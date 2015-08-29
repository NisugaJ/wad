var app = { 
    recordingTo   : null,
    bpm           : 120, // beats per minute
    beatsPerBar   : 4,
    barsPerLoop   : 4,
    numLoopTracks : 8,
    trackActions  : {},
    soundSources  : {},
    preDest       : new Wad.Poly(),
    loopTracks    : [],
    panning       : 0,
    detune        : 0,
    curBeat       : 1,
    prevBeat      : 1,
    rafID         : null, // request animation frame ID
    init          : {}, // an object that will be populated with initialization functions
    keys          : { // info about keys on the computer-keyboard
        record     : [32],
        erase      : [16],
        microphone : [77],
        animate    : [190],
        // switch to different instruments
        alpha      : [90],
        beta       : [88],
        gamma      : [67],
        delta      : [86],
        //////////////////////////////////
        drums      : {
            kick : 48,
            snare : 49,
            closedHihat : 50,
            openHihat : 51,
            crash : 52,
            highTom : 53,
            midTom : 54,
            lowTom : 55,
            cowbell : 56,
        },
        mode       : { // which keys are currently pressed down?
            record   : false,
            erase    : false,
            schedule : false,
        }
    },
    rig           : 'midiRig25',

    instruments   : {
        alpha     : null,
        beta      : null,
        gamma     : null,
        // delta is an object of drum samples
        delta     : {}, 
        mode      : 'alpha',
        pedalDown : false,
    },
    schedule      : [ // scheduled actions. This is not relevant in the default 'immediate action' mode.
        { record : false, mute : false },
        { record : false, mute : false },
        { record : false, mute : false },
        { record : false, mute : false },
        { record : false, mute : false },
        { record : false, mute : false },
        { record : false, mute : false },
        { record : false, mute : false },
    ]
}