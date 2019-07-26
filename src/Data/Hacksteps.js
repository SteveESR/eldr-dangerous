const stepText = `# Anything on the Internet can be hacked
From [household appliances](https://www.cnet.com/news/fridge-caught-sending-spam-emails-in-botnet-attack/)...
...to the [national power grid](https://www.bbc.com/news/technology-48675203)...
If it's online, hackers can get in.
<img src="http://www.maxpixel.net/static/photo/1x/Anonymous-Mask-Hacker-Cyber-Network-Computer-2821433.jpg" width="200" height="200" />

# Millions of dangerous devices are going online
Things you might not expect...or even believe:
  Like [gas ovens](https://www.geappliances.com/ge/connected-appliances/ranges-ovens-cooking.htm)
  ...[firearms](https://www.wired.com/2015/07/hackers-can-disable-sniper-rifleor-change-target/)
  ...[medical devices](https://www.wired.com/story/medtronic-insulin-pump-hack-app/)
  ...and even...[cars](https://www.wired.com/2015/07/hackers-remotely-kill-jeep-highway/)

# Hackers can turn them into weapons...
And because they're on the Internet,
thousands or more can be hacked [simultaneously](https://www.thedrive.com/tech/29120/top-ota-expert-shows-how-state-actors-hack-into-your-car-and-what-happens-next-people-will-die).

#  "There are already millions of these potential weapons in the US",
_50 million_ of them are Internet-connected cars.
  That number will grow by 15-20 million _each year_ from 2020 on.

# Millions are being added with no restriction",
There are no laws or regulations stopping most dangerous devices from being connected to the Internet.
  Manufacturers are creating them with reckless abandon,
  marketing them as "smart devices",
  and raking in huge profits.

# Russia, China, and North Korean hackers have us in their sights
Their fingerprints [are in our power grid](https://www.wired.com/story/russian-hackers-us-power-grid-attacks/),
  and in other critical systems.

# The first shots in the cyberwar have been fired
The U.S. and other major powers
are [openly bragging](https://www.politico.com/story/2019/07/13/trump-cybersecurity-defense-1415650) about their cyber-warfare capabilities.
The coming cyber-war will not be fought on a remote battlefield.
It will be fought in our cities and in our homes.

# Does any of this concern you?
We're pushing for solutions,
and you can be part of it.
`;

const Hacksteps = stepText.split("\n# ");
Hacksteps[0] = Hacksteps[0].substr(2);
export default Hacksteps;
