setcps(0.5) //120BPM

stack(
  
  //Drums
  s("[bd]*4, [hihat]*8, [~ sd]*2"),  
 
  //Bass
  note(cat("~ c3 ~ c3 ~ ~ d#2 ~ ~ ~ g#2 g#2 ~ ~ c2 ~",
           "~ ~ b1 ~ ~ d3 ~ d#2 ~ c#2 ~ ~ ~ f#2 f#2 ~"))
  .sound("square")
  .lpf(800)
  .gain(0.8),

  //Arp
  note("c4 ~ d#4 ~ g4 ~ d#4 ~ c4 ~ d#4 ~ g4 ~ d#4 ~ c4 ~ d#4 ~ g#4 ~ d#4 ~ c4 ~ d#4 ~ g#4 ~ d#4 ~")  
  .sound("saw")
  .dur(0.05)
  .gain("[0.1 0.4]*4")   
  .lpf(sine.range(400, 3500).slow(4))   
  .lpq(12),                             

  //Pad 
  s("gm_synth_strings_1").note("<d#5 c5 ab4 b4>").gain(0.2).slow(2),  
  s("gm_synth_strings_1").note("<g4 eb4 c4 d4>").gain(0.2).slow(2),
  s("gm_synth_strings_1").note("<c4 ab3 f3 g3>").gain(0.2).slow(2)
  
)
