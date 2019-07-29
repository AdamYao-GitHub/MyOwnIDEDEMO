/**
 * Generated using theia-extension-generator
 */

import { BoDesignExtensionCommandContribution, BoDesignExtensionMenuContribution } from './bo-design-extension-contribution';
import {
    CommandContribution,
    MenuContribution
} from "@theia/core/lib/common";

import { ContainerModule } from "inversify";

export default new ContainerModule(bind => {
    // add your contribution bindings here
    
    bind(CommandContribution).to(BoDesignExtensionCommandContribution);
    bind(MenuContribution).to(BoDesignExtensionMenuContribution);
    
});