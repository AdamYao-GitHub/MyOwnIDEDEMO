/**
 * Generated using theia-extension-generator
 */

import { BoDesignTestBOExtensionCommandContribution, BoDesignTestBOExtensionMenuContribution } from './bo-design-testBO-extension-contribution';
import {
    CommandContribution,
    MenuContribution
} from "@theia/core/lib/common";

import { ContainerModule } from "inversify";

export default new ContainerModule(bind => {
    // add your contribution bindings here
    
    bind(CommandContribution).to(BoDesignTestBOExtensionCommandContribution);
    bind(MenuContribution).to(BoDesignTestBOExtensionMenuContribution);
    
});