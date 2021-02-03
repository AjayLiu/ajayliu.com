import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const FAQ: React.FC = () => {
    return (
        <>
        <h2 className="sectionTitle">Q&A</h2>
        <Accordion allowZeroExpanded allowMultipleExpanded >
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Why aren't your games on the Apple App Store?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        I only have my games on the Google Play Store because Google Play
                        only requires a one-time payment of $25 and I can post as many
                        games as I want forever, but Apple is pretty stingy and needs me to pay $99
                        annually. Any game with an Android version can easily be built for iOS as well,
                        but I simply don't want to pay the high price to publish them. 
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        How can I play your games from an iOS device?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        You can play most of my games in the web browser (ex: Safari) from your iOS device.
                        Just click on any game you want to play in the projects section above.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        I contacted you but you haven't responded in 24 hours.
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        If you contacted me through the contact form, try emailing me manually to contact@ajayliu.com.
                        If I still don't respond to you, my email forwarding might be down - please submit a bug report 
                        form <a style={{color:"yellow"}} href="https://forms.gle/8rxzwknToNhAyiAk6">here</a>.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        </>
    );
}

export default FAQ;