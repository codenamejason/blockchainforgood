import Duration from './duration'
import Range from './range'
import Period from './period'
import CodeableConcept from './codeableConcept'

const Timing = {
    // from BackboneElement: extension, modifierExtension
    "event" : ["<dateTime>"], // When the event occurs
    "repeat" : { // When the event is to occur
      // bounds[x]: Length/Range of lengths, or (Start and/or end) limits. One of these 3:
      "boundsDuration" : { Duration },
      "boundsRange" : { Range },
      "boundsPeriod" : { Period },
      "count" : 0, // Number of times to repeat
      "countMax" : 0, // Maximum number of times to repeat
      "duration" : 0.00, // How long when it happens
      "durationMax" : 0.00, // How long when it happens (Max)
      "durationUnit" : "<code>", // s | min | h | d | wk | mo | a - unit of time (UCUM)
      "frequency" : 0, // Event occurs frequency times per period
      "frequencyMax" : 0, // Event occurs up to frequencyMax times per period
      "period" : 0, // Event occurs frequency times per period
      "periodMax" : 0, // Upper limit of period (3-4 hours)
      "periodUnit" : "<code>", // s | min | h | d | wk | mo | a - unit of time (UCUM)
      "dayOfWeek" : ["<code>"], // mon | tue | wed | thu | fri | sat | sun
      "timeOfDay" : ["<time>"], // Time of day for action
      "when" : ["<code>"], // Code for time period of occurrence
      "offset" : 0 // Minutes from event (before or after)
    },
    "code" : { CodeableConcept } // BID | TID | QID | AM | PM | QD | QOD | +
  }

export default Timing

// Constraints
// id	Level	Location	Description	Expression
// tim-1	Rule	Timing.repeat	if there's a duration, there needs to be duration units	duration.empty() or durationUnit.exists()
// tim-2	Rule	Timing.repeat	if there's a period, there needs to be period units	period.empty() or periodUnit.exists()
// tim-4	Rule	Timing.repeat	duration SHALL be a non-negative value	duration.exists() implies duration >= 0
// tim-5	Rule	Timing.repeat	period SHALL be a non-negative value	period.exists() implies period >= 0
// tim-6	Rule	Timing.repeat	If there's a periodMax, there must be a period	periodMax.empty() or period.exists()
// tim-7	Rule	Timing.repeat	If there's a durationMax, there must be a duration	durationMax.empty() or duration.exists()
// tim-8	Rule	Timing.repeat	If there's a countMax, there must be a count	countMax.empty() or count.exists()
// tim-9	Rule	Timing.repeat	If there's an offset, there must be a when (and not C, CM, CD, CV)	offset.empty() or (when.exists() and ((when in ('C' | 'CM' | 'CD' | 'CV')).not()))
// tim-10	Rule	Timing.repeat	If there's a timeOfDay, there cannot be a when, or vice versa	timeOfDay.empty() or when.empty()